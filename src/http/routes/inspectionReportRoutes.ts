import { FastifyInstance } from 'fastify'
import { createInspectionReport } from '../controllers/inspectionReportController'
import { authenticate } from '../middlewares/authenticate'

export async function inspectionReportRoutes(app: FastifyInstance) {
  app.post(
    '/inspection-reports',
    { preHandler: authenticate },
    createInspectionReport,
  )
}
