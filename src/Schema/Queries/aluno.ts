import { GraphQLList } from 'graphql'
import { AlunoType } from '../TypeDefs/Aluno'
import { Alunos } from '../../Entities/Alunos'

export const GET_ALL_ALUNOS = {
  type: new GraphQLList(AlunoType),
  resolve() {
    return Alunos.find()
  }
}
