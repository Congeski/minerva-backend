/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyReply, FastifyRequest } from 'fastify'
import { prisma } from '../utils/prisma'

export async function createTicket(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { enterprise_id, secretary_id, inspection_order_id, openDate, status } =
    request.body as any
  const newTicket = await prisma.ticket.create({
    data: {
      enterprise_id,
      secretary_id,
      inspection_order_id,
      openDate,
      status,
    },
  })
  return reply.status(201).send(newTicket)
}

export async function updateTicket(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as any
  const { closeDate, status } = request.body as any

  // Verifica se o relatório está concluído antes de fechar o chamado
  const ticket = await prisma.ticket.findUnique({
    where: { id },
    include: { inspectionOrder: true },
  })
  const report = await prisma.inspectionReport.findUnique({
    where: { id: ticket?.inspectionOrder.inspection_report_id },
  })

  if (!report) {
    return reply.status(400).send({ error: 'Report not completed' })
  }

  const updatedTicket = await prisma.ticket.update({
    where: { id },
    data: { closeDate, status },
  })

  return reply.status(200).send(updatedTicket)
}

export async function cancelTicket(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as any
  await prisma.ticket.update({
    where: { id },
    data: { status: 'CANCELLED' },
  })
  return reply.status(200).send({ message: 'Ticket cancelled' })
}
