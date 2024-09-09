import { z } from 'zod'

export const createSecretarySchema = {
  body: z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    phone: z.string().optional(),
  }),
}
