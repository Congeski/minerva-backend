/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyReply, FastifyRequest } from 'fastify'
import { prisma } from '../utils/prisma'

export async function createInspectionReport(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { service_order_id, inspector_id, completionDate } = request.body as any
  const newReport = await prisma.inspectionReport.create({
    data: { service_order_id, inspector_id, completionDate },
  })
  return reply.status(201).send(newReport)
}
