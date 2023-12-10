const express = require("express");
const bodyParser = require("body-parser");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
const serviceAccount = require("./service.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://fb-project-arof-default-rtdb.asia-southeast1.firebasedatabase.app",
});
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Define a reference to the Firebase database
const db = admin.database();
const todosRef = db.ref("todos"); // 'todos' is the name of your collection

// API Endpoints

// Create a new todo
app.post("/todos", (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res
      .status(400)
      .json({ error: "Title and description are required" });
  }

  const newTodoRef = todosRef.push();
  newTodoRef.set({
    title,
    description,
  });

  res.json({ id: newTodoRef.key, title, description });
});

// Get all todos
app.get("/todos", (req, res) => {
  todosRef.once("value", (snapshot) => {
    const todos = [];
    snapshot.forEach((childSnapshot) => {
      const todo = {
        id: childSnapshot.key,
        ...childSnapshot.val(),
      };
      todos.push(todo);
    });
    res.json(todos);
  });
});

// Get a specific todo by ID
app.get("/todos/:id", (req, res) => {
  const todoId = req.params.id;

  todosRef.child(todoId).once("value", (snapshot) => {
    if (snapshot.exists()) {
      const todo = {
        id: snapshot.key,
        ...snapshot.val(),
      };
      res.json(todo);
    } else {
      res.status(404).json({ error: "Todo not found" });
    }
  });
});

// Update a todo by ID
app.put("/todos/:id", (req, res) => {
  const todoId = req.params.id;
  const { title, description } = req.body;

  todosRef.child(todoId).update({
    title,
    description,
  });

  res.json({ id: todoId, title, description });
});

// Delete a todo by ID
app.delete("/todos/:id", (req, res) => {
  const todoId = req.params.id;

  todosRef.child(todoId).remove();

  res.json({ message: "Todo deleted successfully" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
