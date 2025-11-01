import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.httpUrl(),
  VITE_GITHUB_OAUTH_CLIENT_ID: z.string(),
})

export const env = envSchema.parse(import.meta.env)
