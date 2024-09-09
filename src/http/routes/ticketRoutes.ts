import { FastifyInstance } from 'fastify'
import {
  createTicket,
  updateTicket,
  cancelTicket,
} from '../controllers/ticketController'
import { authenticate } from '../middlewares/authenticate'

export async function ticketRoutes(app: FastifyInstance) {
  app.post('/tickets', { preHandler: authenticate }, createTicket)
  app.put('/tickets/:id', { preHandler: authenticate }, updateTicket)
  app.patch('/tickets/:id/cancel', { preHandler: authenticate }, cancelTicket)
}
