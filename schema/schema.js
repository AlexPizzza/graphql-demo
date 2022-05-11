import { GraphQLSchema } from "graphql";

import RootQueryType from "../queries/RootQuery.js";
import RootMutationType from "../mutations/RootMutation.js";

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: RootMutationType,
});

export default schema;
