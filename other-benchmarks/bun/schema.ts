import { createSchema } from "graphql-yoga";

const md5hasher = new Bun.CryptoHasher("md5");

import { data } from "./data";

type Book = {
  id: string;
  name: string;
  numPages: number;
};

type Author = {
  id: string;
  name: string;
  md5: string;
  company: string;
  books: Book[];
};

const schema = createSchema({
  typeDefs: `
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
  }`,
  resolvers: {
    Author: {
      md5: (parent: Author) => md5hasher.update(parent.name).digest("hex"),
    },
    Query: {
      authors: () => data,
    },
  },
});

export default schema;
