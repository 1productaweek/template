import jwt from 'jsonwebtoken'
import { GraphQLClient } from 'graphql-request'
import prismaDb from './db/prisma'

const { CORE_GRAPHQL_ENDPOINT, AUTH_JWT } = process.env

const prisma = prismaDb()

export default async function graphqlRequest (query, variables) {
  const token = await getBotToken()
  const headers = { Authorization: `Bearer ${token}` }
  const client = new GraphQLClient(CORE_GRAPHQL_ENDPOINT, { headers })
  return client.request(query, variables)
}

let token = null
export async function getBotToken () {
  if (token) return token
  const user = await prisma.query.user({
    where: {
      username: 'zeplobot',
    },
  }, '{ id, auth { id } }')

  token = createToken(user.auth.id, user.id)
  return token
}

export function createToken (authId, userId) {
  return jwt.sign({
    authId,
    userId,
  }, AUTH_JWT)
}
