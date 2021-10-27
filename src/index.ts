import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { createConnection } from 'typeorm'
import { schema } from './Schema'
import { Alunos } from './Entities/Alunos'

const main = async () => {
  await createConnection({
    type: "mysql",
    database: "Descomplica_DB",
    username: "root",
    password: "",
    logging: true,
    synchronize: false,
    entities: [Alunos],
  })

  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
  }))
  app.listen(3001, () => {
    console.log("Servidor rodando na porta 3001")
  })
}

main().catch((err) => {
  console.log(err)
})