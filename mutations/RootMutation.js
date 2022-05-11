import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

import { authors, books } from "../data.js";
import AuthorType from "../types/AuthorType.js";
import BookType from "../types/BookType.js";

const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "RootMutation",
  fields: () => ({
    addBook: {
      type: BookType,
      description: "Adding a Book",
      args: {
        name: {
          type: GraphQLNonNull(GraphQLString),
        },
        authorId: {
          type: GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: (_parent, args) => {
        const book = {
          id: books.length + 1,
          name: args.name,
          authorId: args.authorId,
        };
        books.push(book);
        return book;
      },
    },
    addAuthor: {
      type: AuthorType,
      description: "Adding an Author",
      args: {
        name: {
          type: GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (_parent, args) => {
        const author = {
          id: authors.length + 1,
          name: args.name,
        };
        authors.push(author);
        return author;
      },
    },
  }),
});

export default RootMutationType;
