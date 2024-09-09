/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyReply, FastifyRequest } from 'fastify'
import { prisma } from '../utils/prisma'
import { hashPassword } from '../utils/hashUtils'

export async function createSecretary(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { name, email, password, phone } = request.body as any
  const passwordHash = await hashPassword(password)

  const newSecretary = await prisma.secretary.create({
    data: { name, email, password_hash: passwordHash, phone },
  })

  return reply.status(201).send(newSecretary)
}

export async function updateSecretary(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as any
  const { name, email, phone } = request.body as any

  const updatedSecretary = await prisma.secretary.update({
    where: { id },
    data: { name, email, phone },
  })

  return reply.status(200).send(updatedSecretary)
}

export async function deleteSecretary(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as any

  await prisma.secretary.delete({
    where: { id },
  })

  return reply.status(204).send()
}
