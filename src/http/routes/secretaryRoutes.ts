import { FastifyInstance } from 'fastify'
import {
  createSecretary,
  updateSecretary,
  deleteSecretary,
} from '../controllers/secretaryController'
import { authenticate } from '../middlewares/authenticate'

export async function secretaryRoutes(app: FastifyInstance) {
  app.post('/secretaries', { preHandler: authenticate }, createSecretary)
  app.put('/secretaries/:id', { preHandler: authenticate }, updateSecretary)
  app.delete('/secretaries/:id', { preHandler: authenticate }, deleteSecretary)
}
