import Fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import { secretaryRoutes } from './http/routes/secretaryRoutes'
import { inspectorRoutes } from './http/routes/inspectorRoutes'
import { enterpriseRoutes } from './http/routes/enterpriseRoutes'
import { ticketRoutes } from './http/routes/ticketRoutes'
import { inspectionReportRoutes } from './http/routes/inspectionReportRoutes'

const app = Fastify()

const jwtSecret = process.env.JWT_SECRET
if (!jwtSecret) {
  throw new Error('JWT_SECRET environment variable is not defined')
}

app.register(fastifyJwt, { secret: jwtSecret })
app.register(fastifyCookie)

app.register(secretaryRoutes)
app.register(inspectorRoutes)
app.register(enterpriseRoutes)
app.register(ticketRoutes)
app.register(inspectionReportRoutes)

export default app
