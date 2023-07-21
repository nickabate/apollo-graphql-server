# Apollo GraphQL Server (TypeScript)

**_This purpose of this project was to complete a basic GraphQL server that functions as the backend for a To-Do app._**

This GraphQL server was written in TypeScript to utilize type safe code which is high-quality, scalable, and maintainable.

The server uses a JSON file for data persistence. A user can create tasks, view a single task or all tasks, mark a task as completed or delete a task entirely.

The creation of this server was an amazing opportunity to become more comfortable writing TypeScript, and utilizing the power of GraphQL to create concise server requests.

Thank you for checking out my work! Feel free to reach out to me with any questions or to connect.

\- Nick Abate

## Table of Contents

- [Installation](#installation)
- [How To Make Queries](#how-to-make-queries)
- [Query & Mutation Examples](#query--mutation-examples)

## Installation

Please ensure you have `Node.js` and `npm` installed to run this application. Follow these steps to run a local instance of the server.

1. Download or clone this repository. Once completed, ensure the project directory is opened through your terminal.

2. Install the required dependencies with `npm install`.

3. Scripts have been prepared to compile the TypeScript files and to run the server instance. Simply run the following command in your terminal to do so, ensuring you are in the project folder directory: `npm start`.

## How To Make Queries

After the server has booted up, two ways in which the server data can be accessed include:

1. Visit `http://localhost:4000` to view the Apollo Sandbox. Queries can be made directly to the server through this page. See below for examples.

2. Query using Postman with the following configuration:
   - Ensure method has been changed to `POST`
   - Add headers `content-type: application/json` and `x-apollo-operation-name` with the value being the name of the query which you are trying to perform.
   - Include a `GraphQL query` in the body of the request. See below for examples.

## Query & Mutation Examples

Queries can use variables to specify the required information. Ensure that variables are written in JSON when the request is made through Apollo Sandbox or Postman.

### Get all tasks

```
query {
  allTasks {
    id
    text
    completed
  }
}
```

### Get single task by ID

```
query($id: ID!) {
  singleTask(id: $id) {
    text
    id
    completed
  }
}
```

### Create new task

```
mutation($text: String!) {
  createTask(text: $text) {
    id
    text
    completed
  }
}
```

### Mark task as completed

```
mutation($id: ID!) {
  markTaskAsCompleted(id: $id) {
    id
    text
    completed
  }
}
```

### Delete a task

```
mutation($id: ID!) {
  deleteTask(id: $id)
}
```
