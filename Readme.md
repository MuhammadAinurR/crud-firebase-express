# Express Firebase CRUD API

This is a simple CRUD API built with Express.js and Firebase Realtime Database.

## Getting Started

1.  Clone the repository:

        git clone https://github.com/your-username/express-firebase-crud-api.git

        cd express-firebase-crud-api

2.  Install dependencies:
    npm install

3.  Obtain serviceAccountKey.json from Firebase Console and place it in the root directory.

4.  Update the Firebase database URL in `index.js`:
    databaseURL: 'https://your-firebase-database-url.firebaseio.com'

5.  Run the server:
    node index.js
    the server will be running at 'http://localhost:3000'.

## Endpoints

1. Create a new Todo

- Method: POST

- URL: http://localhost:3000/todos

- Body:

        // json
        Copy code
        {
        "title": "Learn Express",
        "description": "Study Express.js for building web applications"
        }

2. Get all Todos

- Method: GET
- URL: http://localhost:3000/todos

3. Get a specific Todo by ID

- Method: GET
- URL: http://localhost:3000/todos/{todoId}
- Replace {todoId} with the actual ID of a Todo you want to retrieve.

4. Update a Todo by ID

- Method: PUT

- URL: http://localhost:3000/todos/{todoId}

- Replace {todoId} with the actual ID of a Todo you want to update.

        // json
        {
        "title": "Master Express",
        "description": "Become an expert in Express.js"
        }

5. Delete a Todo by ID

- Method: DELETE
- URL: http://localhost:3000/todos/{todoId}
- Replace {todoId} with the actual ID of a Todo you want to delete.

###Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.
# crud-firebase-express
