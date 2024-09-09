/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyReply, FastifyRequest } from 'fastify'
import { prisma } from '../utils/prisma'

export async function createEnterprise(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { client_id, address } = request.body as any
  const newEnterprise = await prisma.enterprise.create({
    data: { client_id, address },
  })
  return reply.status(201).send(newEnterprise)
}

export async function updateEnterprise(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as any
  const { address } = request.body as any
  const updatedEnterprise = await prisma.enterprise.update({
    where: { id },
    data: { address },
  })
  return reply.status(200).send(updatedEnterprise)
}

export async function deleteEnterprise(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as any
  await prisma.enterprise.delete({
    where: { id },
  })
  return reply.status(204).send()
}
