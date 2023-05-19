import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { mememoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  // deve ser especificado cada URL de front-end que poderá acessar o back-end
  origin: true, // todas URLs de front-end poderão acessar
})
app.get('/', (request, reply) => {
  reply.send('oi')
})

app.register(jwt, {
  secret: 'spacetime',
})

app.register(authRoutes)
app.register(mememoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
