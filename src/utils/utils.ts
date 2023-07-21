import fs from "fs";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

// Define the Task interface to be used in our mutations
export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

// Provide access to the database JSON file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const TASKS_JSON_PATH = resolve(__dirname, "../../data/tasks.json");

// Convenience function to get the data from the database JSON file
export const readTasksFromFile = (): Task[] => {
  try {
    const data = fs.readFileSync(TASKS_JSON_PATH, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading tasks from file:", error);
    return [];
  }
};

// Convenience function to write the data to the database JSON file
export const writeTasksToFile = (tasks: Task[]): void => {
  try {
    fs.writeFileSync(TASKS_JSON_PATH, JSON.stringify(tasks, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing tasks to file:", error);
  }
};
