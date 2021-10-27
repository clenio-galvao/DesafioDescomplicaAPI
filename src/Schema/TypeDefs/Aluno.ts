import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql'

export const AlunoType = new GraphQLObjectType({
  name: "Aluno",
  fields: () => ({
    id: { type: GraphQLID },
    nome: { type: GraphQLString },
    cpf: { type: GraphQLString },
    email: { type: GraphQLString },
  })
})
