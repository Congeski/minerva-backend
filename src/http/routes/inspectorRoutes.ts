import { FastifyInstance } from 'fastify'
import {
  createInspector,
  updateInspector,
  deleteInspector,
} from '../controllers/inspectorController'
import { authenticate } from '../middlewares/authenticate'

export async function inspectorRoutes(app: FastifyInstance) {
  app.post('/inspectors', { preHandler: authenticate }, createInspector)
  app.put('/inspectors/:id', { preHandler: authenticate }, updateInspector)
  app.delete('/inspectors/:id', { preHandler: authenticate }, deleteInspector)
}
