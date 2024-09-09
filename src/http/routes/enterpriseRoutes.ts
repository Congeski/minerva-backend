import { FastifyInstance } from 'fastify'
import {
  createEnterprise,
  updateEnterprise,
  deleteEnterprise,
} from '../controllers/enterpriseController'
import { authenticate } from '../middlewares/authenticate'

export async function enterpriseRoutes(app: FastifyInstance) {
  app.post('/enterprises', { preHandler: authenticate }, createEnterprise)
  app.put('/enterprises/:id', { preHandler: authenticate }, updateEnterprise)
  app.delete('/enterprises/:id', { preHandler: authenticate }, deleteEnterprise)
}
