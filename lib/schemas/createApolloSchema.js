const { makeExecutableSchema } = require("@graphql-tools/schema");
const md5 = require("md5");
const { gql } = require("graphql-tag");
const { data } = require("../data");

const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    md5: String!
    company: String!
    books: [Book!]!
  }

  type Book {
    id: ID!
    name: String!
    numPages: Int!
  }

  type Query {
    authors: [Author!]!
  }
`;

const resolvers = {
  Author: {
    md5: (parent) => md5(parent.name),
  },
  Query: {
    authors: () => data,
  },
};

const asyncResolvers = {
  Author: {
    md5: (parent) => md5(parent.name),
  },
  Query: {
    authors: async () => data,
  },
};

module.exports.createApolloSchema = () =>
  makeExecutableSchema({
    typeDefs,
    resolvers,
  });

module.exports.createAsyncApolloSchema = () =>
  makeExecutableSchema({
    typeDefs,
    resolvers: asyncResolvers,
  });
