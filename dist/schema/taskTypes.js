// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
 
  # This "Task" type defines the queryable fields for every task in our data source.
  type Task {
    id: ID!
    text: String!
    completed: Boolean!
  }

  # Available queries and mutations that clients can execute, along with the return type for each. 
    type Query {
    allTasks: [Task!]!
    singleTask(id: ID!): Task!
  }
  
  type Mutation {
    createTask(text: String!): Task!
    deleteTask(id: ID!): ID!
    markTaskAsCompleted(id: ID!): Task!
  }
`;
