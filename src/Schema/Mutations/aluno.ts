import { GraphQLString } from "graphql"
import { Alunos } from "../../Entities/Alunos"
import { AlunoType } from "../TypeDefs/Aluno"

export const CREATE_ALUNO = {
  type: AlunoType,
  args: {
    nome: { type: GraphQLString },
    cpf: { type: GraphQLString },
    email: { type: GraphQLString },
  },
  async resolve(_: any, args: any) {
    const { nome, cpf, email } = args
    await Alunos.insert({ nome, cpf, email})
    return 'Aluno inserido com sucesso'
  }
}