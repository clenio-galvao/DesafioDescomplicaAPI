import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GET_ALL_ALUNOS } from "./Queries/aluno";
import { CREATE_ALUNO } from "./Mutations/aluno";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: { listarAlunos: GET_ALL_ALUNOS }
})

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: { criarNovoAluno: CREATE_ALUNO }
})

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
})
