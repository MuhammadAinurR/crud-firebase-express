# Express Firebase CRUD API

This is a simple CRUD API built with Express.js and Firebase Realtime Database.

## Getting Started

1.  Clone the repository:

        git clone https://github.com/your-username/express-firebase-crud-api.git

        cd express-firebase-crud-api

2.  Install dependencies:

         npm install

4.  Obtain serviceAccountKey.json from Firebase Console and place it in the root directory.

5.  Update the Firebase database URL in `index.js`:

        databaseURL: 'https://your-firebase-database-url.firebaseio.com'

6.  Run the server:

        node index.js
    the server will be running at 'http://localhost:3000'.

## Endpoints

1. Create a new Todo
- Method: POST
- URL: http://localhost:3000/todos
- Body:

        // json
        {
        "title": "Learn Express",
        "description": "Study Express.js for building web applications"
        }
![post_image](https://github.com/MuhammadAinurR/crud-firebase-express/blob/main/output/post.png?raw=true)


2. Get all Todos

- Method: GET
- URL: http://localhost:3000/todos
![get_image](https://github.com/MuhammadAinurR/crud-firebase-express/blob/main/output/get.png?raw=true)

3. Get a specific Todo by ID

- Method: GET
- URL: http://localhost:3000/todos/{todoId}
- Replace {todoId} with the actual ID of a Todo you want to retrieve.
![get_image_specific](https://github.com/MuhammadAinurR/crud-firebase-express/blob/main/output/get-specified.png?raw=true)

4. Update a Todo by ID

- Method: PUT

- URL: http://localhost:3000/todos/{todoId}

- Replace {todoId} with the actual ID of a Todo you want to update.

        // json
        {
        "title": "Master Express",
        "description": "Become an expert in Express.js"
        }
![update](https://github.com/MuhammadAinurR/crud-firebase-express/blob/main/output/update.png?raw=true)

5. Delete a Todo by ID

- Method: DELETE
- URL: http://localhost:3000/todos/{todoId}
- Replace {todoId} with the actual ID of a Todo you want to delete.
![delete](https://github.com/MuhammadAinurR/crud-firebase-express/blob/main/output/delete.png?raw=true)

###Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.
