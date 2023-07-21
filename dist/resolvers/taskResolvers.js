import { readTasksFromFile, writeTasksToFile } from "../utils/utils.js";
import { v4 } from "uuid";
// Resolvers define how to fetch the types defined in your schema.
// This resolver handles all actions related to the users tasks.
export const resolvers = {
    Query: {
        // Retrieve all tasks from the database
        allTasks: () => readTasksFromFile(),
        // Retrieve one task by task ID
        singleTask: (_, { id }) => {
            const tasks = readTasksFromFile();
            const task = tasks.find((task) => task.id === id);
            if (!task) {
                throw new Error("Task not found");
            }
            return task;
        },
    },
    Mutation: {
        // Post new task to the database
        createTask: (_, { text }) => {
            const tasks = readTasksFromFile();
            const newID = v4();
            const newTask = {
                id: newID,
                text,
                completed: false,
            };
            tasks.push(newTask);
            writeTasksToFile(tasks);
            return newTask;
        },
        // Remove task from the database by task ID
        deleteTask: (_, { id }) => {
            const tasks = readTasksFromFile();
            const taskIndex = tasks.findIndex((task) => task.id === id);
            if (taskIndex === -1) {
                throw new Error("Task not found");
            }
            tasks.splice(taskIndex, 1);
            writeTasksToFile(tasks);
            return id;
        },
        // Update the task by ID to be completed
        markTaskAsCompleted: (_, { id }) => {
            const tasks = readTasksFromFile();
            const task = tasks.find((task) => task.id === id);
            if (!task) {
                throw new Error("Task not found");
            }
            task.completed = true;
            writeTasksToFile(tasks);
            return task;
        },
    },
};
