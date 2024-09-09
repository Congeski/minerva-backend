import Fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import { secretaryRoutes } from './http/routes/secretaryRoutes'
import { inspectorRoutes } from './http/routes/inspectorRoutes'
import { enterpriseRoutes } from './http/routes/enterpriseRoutes'
import { ticketRoutes } from './http/routes/ticketRoutes'
import { inspectionReportRoutes } from './http/routes/inspectionReportRoutes'

const app = Fastify()

// app.register(fastifyJwt, { secret: process.env.JWT_SECRET })
app.register(fastifyCookie)

app.register(secretaryRoutes)
app.register(inspectorRoutes)
app.register(enterpriseRoutes)
app.register(ticketRoutes)
app.register(inspectionReportRoutes)

export default app
