import { GraphQLInt, GraphQLList, GraphQLObjectType } from "graphql";

import { authors, books } from "../data.js";
import AuthorType from "../types/AuthorType.js";
import BookType from "../types/BookType.js";

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "Root Query",
  fields: () => ({
    book: {
      type: BookType,
      description: "A Single Book",
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: (_parent, args) => books.find((book) => book.id === args.id),
    },
    author: {
      type: AuthorType,
      description: "A Single Author",
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: (_parent, args) =>
        authors.find((author) => author.id === args.id),
    },
    books: {
      type: new GraphQLList(BookType),
      description: "List of All Books",
      resolve: () => books,
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: "List of All Authors",
      resolve: () => authors,
    },
  }),
});

export default RootQueryType;
