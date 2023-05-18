import fastify from 'fastify'
import cors from '@fastify/cors'
import { mememoriesRoutes } from './routes/memories'

const app = fastify()

app.register(mememoriesRoutes)
app.register(cors, {
  // deve ser especificado cada URL de front-end que poderá acessar o back-end
  origin: true, // todas URLs de front-end poderão acessar
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
