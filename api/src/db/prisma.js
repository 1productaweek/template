import { Prisma } from '@zeplo/prisma-binding'
import path from 'path'

let prisma

export default () => {
  if (prisma) return prisma

  prisma = new Prisma({
    typeDefs: path.resolve(__dirname, './prisma.graphql'), // the auto-generated GraphQL schema of the Prisma API
    endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
    debug: process.env.DEBUG === 'true', // log all GraphQL queries & mutations sent to the Prisma API
    secret: process.env.PRISMA_MANAGEMENT_API_SECRET,
  })

  return prisma
}
