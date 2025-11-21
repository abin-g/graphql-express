import { buildSchema, GraphQLSchema } from "graphql";

export const schema: GraphQLSchema = buildSchema(`
  type User {
    id: ID!
    name: String!
    age: Int!
  }

  type Query {
    hello: String
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    addUser(name: String!, age: Int!): User
  }
`);
