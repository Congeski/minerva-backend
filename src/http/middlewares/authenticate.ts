import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { prisma } from '../utils/prisma'
import { compare } from 'bcryptjs'

export async function authenticate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, password } = authenticateBodySchema.parse(request.body)

  try {
    // Verifica se o usuário existe no banco
    const user = await prisma.secretary.findUnique({
      where: { email },
      select: {
        id: true,
        name: true,
        email: true,
        password_hash: true,
        phone: true,
        role: true, // Certifique-se de selecionar o campo role
      },
    })

    if (!user) {
      return reply.status(400).send({ message: 'Invalid credentials.' })
    }

    // Compara a senha fornecida com a senha hash armazenada
    const isPasswordValid = await compare(password, user.password_hash)

    if (!isPasswordValid) {
      return reply.status(400).send({ message: 'Invalid credentials.' })
    }

    // Cria o token JWT
    const token = await reply.jwtSign(
      {
        role: user.role,
      },
      {
        sign: {
          sub: user.id,
        },
      },
    )

    const refreshToken = await reply.jwtSign(
      {
        role: user.role,
      },
      {
        sign: {
          sub: user.id,
          expiresIn: '7d',
        },
      },
    )

    // Envia os tokens e define o cookie para o refresh token
    return reply
      .setCookie('refreshToken', refreshToken, {
        path: '/',
        secure: true,
        sameSite: true,
        httpOnly: true,
      })
      .status(200)
      .send({
        token,
      })
  } catch (err) {
    return reply.status(500).send({ message: 'Internal server error.' })
  }
}
