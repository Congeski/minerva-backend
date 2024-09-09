/* eslint-disable @typescript-eslint/no-explicit-any */
import { FastifyReply, FastifyRequest } from 'fastify'
import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const clientSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
})

export async function createClient(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { name, email, phone } = clientSchema.parse(request.body)

  const newClient = await prisma.client.create({
    data: { name, email, phone },
  })

  return reply.status(201).send(newClient)
}

export async function updateClient(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as any
  const { name, email, phone } = clientSchema.partial().parse(request.body)

  const updatedClient = await prisma.client.update({
    where: { id },
    data: { name, email, phone },
  })

  return reply.status(200).send(updatedClient)
}

export async function deleteClient(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.params as any

  await prisma.client.delete({
    where: { id },
  })

  return reply.status(204).send()
}

export async function getClient(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as any

  const client = await prisma.client.findUnique({
    where: { id },
    include: { enterprise: true }, // Inclui os empreendimentos associados
  })

  if (!client) {
    return reply.status(404).send({ error: 'Client not found' })
  }

  return reply.status(200).send(client)
}
