const express = require('express');
const app = express();
const { ApolloServer, gql } = require('apollo-server-express')

const typeDefs = gql`
type Query {
  me: User
}
`
const resolvers = null;

const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.applyMiddleware({ app })