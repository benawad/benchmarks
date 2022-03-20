import "reflect-metadata";
import {
  buildSchema,
  Resolver,
  Query,
  ObjectType,
  Field,
  Int,
  ID,
  FieldResolver,
  Root,
  UseMiddleware,
} from "type-graphql";
import md5 = require("md5");
const { data } = require("../data");

@ObjectType()
class Book {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field(() => Int)
  numPages: number;
}

@ObjectType()
class Author {
  @Field(() => ID)
  id: string;
  @Field()
  name: string;
  @Field()
  md5: string;
  @Field()
  company: string;
  @Field(() => [Book])
  books: Book[];
}

@Resolver(Author)
class SimpleResolver {
  @FieldResolver()
  md5(@Root() root: Author) {
    return md5(root.name);
  }
  @Query(() => [Author])
  authors() {
    return data;
  }
}

@Resolver(Author)
class AsyncResolver {
  @FieldResolver()
  md5(@Root() root: Author) {
    return md5(root.name);
  }
  @Query(() => [Author])
  async authors() {
    return data;
  }
}

@Resolver(Author)
class MiddlewareResolver {
  @FieldResolver()
  md5(@Root() root: Author) {
    return md5(root.name);
  }
  @Query(() => [Author])
  @UseMiddleware(({ args }, next) => {
    Object.keys(args).length;
    return next();
  })
  async authors() {
    return data;
  }
}

@Resolver(Author)
class AsyncMiddlewareResolver {
  @FieldResolver()
  md5(@Root() root: Author) {
    return md5(root.name);
  }
  @Query(() => [Author])
  @UseMiddleware(async ({ args }, next) => {
    Object.keys(args).length;
    return next();
  })
  async authors() {
    return data;
  }
}

export function createTypeGraphQLSchema() {
  return buildSchema({
    resolvers: [SimpleResolver],
  });
}

export function createAsyncTypeGraphQLSchema() {
  return buildSchema({
    resolvers: [AsyncResolver],
  });
}

export function createMiddlewareTypeGraphQLSchema() {
  return buildSchema({
    resolvers: [MiddlewareResolver],
  });
}

export function createAsyncMiddlewareTypeGraphQLSchema() {
  return buildSchema({
    resolvers: [AsyncMiddlewareResolver],
  });
}
