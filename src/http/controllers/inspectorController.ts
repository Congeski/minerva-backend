/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyReply, FastifyRequest } from 'fastify'
import { prisma } from '../utils/prisma'
import { hashPassword } from '../utils/hashUtils'

export async function createInspector(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { name, email, password, phone } = request.body as any
  const passwordHash = await hashPassword(password)
  const newInspector = await prisma.inspector.create({
    data: { name, email, password_hash: passwordHash, phone },
  })
  return reply.status(201).send(newInspector)
}

export async function updateInspector(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as any
  const { name, email, phone } = request.body as any
  const updatedInspector = await prisma.inspector.update({
    where: { id },
    data: { name, email, phone },
  })
  return reply.status(200).send(updatedInspector)
}

export async function deleteInspector(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as any
  await prisma.inspector.delete({
    where: { id },
  })
  return reply.status(204).send()
}
