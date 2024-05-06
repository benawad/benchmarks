import "reflect-metadata";
import {
  buildSchemaSync,
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
import { data } from "../data";
import md5 = require("md5");

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
  return buildSchemaSync({
    resolvers: [SimpleResolver],
  });
}

export function createAsyncTypeGraphQLSchema() {
  return buildSchemaSync({
    resolvers: [AsyncResolver],
  });
}

export function createMiddlewareTypeGraphQLSchema() {
  return buildSchemaSync({
    resolvers: [MiddlewareResolver],
  });
}

export function createAsyncMiddlewareTypeGraphQLSchema() {
  return buildSchemaSync({
    resolvers: [AsyncMiddlewareResolver],
  });
}
