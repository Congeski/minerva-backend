import { FastifyInstance } from 'fastify'
import {
  createClient,
  updateClient,
  deleteClient,
  getClient,
} from '../controllers/clientController'
import { authenticate } from '../middlewares/authenticate'

export async function clientRoutes(app: FastifyInstance) {
  app.post('/clients', { preHandler: authenticate }, createClient)
  app.put('/clients/:id', { preHandler: authenticate }, updateClient)
  app.delete('/clients/:id', { preHandler: authenticate }, deleteClient)
  app.get('/clients/:id', { preHandler: authenticate }, getClient)
}
