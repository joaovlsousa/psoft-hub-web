import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { GithubIcon } from 'lucide-react'
import { useEffect } from 'react'
import { z } from 'zod'
import { useAuth } from '@/hooks/use-auth'
import { useSignInWithGithub } from '@/http/use-sign-in-with-github'

const searchParamsSchema = z.object({
  code: z.string().default(''),
})

export const Route = createFileRoute('/auth/callback/github')({
  validateSearch: searchParamsSchema,
  component: RouteComponent,
})

function RouteComponent() {
  const { code } = Route.useSearch()

  const { token } = useAuth()
  const navigate = useNavigate()

  const {
    mutate: signInWithGithub,
    isPending,
    isSuccess,
  } = useSignInWithGithub(code)

  useEffect(() => {
    if (token) {
      navigate({ to: '/' })

      return
    }

    if (code && !isPending && !isSuccess) {
      signInWithGithub()
    }
  }, [code, isPending, isSuccess, signInWithGithub, token, navigate])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-5">
      <div className="p-4 rounded-full bg-zinc-800 animate-bounce">
        <GithubIcon className="size-10" />
      </div>

      <p className="font-medium text-muted-foreground tracking-wide animate-pulse">
        {isPending ? 'Buscando dados...' : 'Redirecionando...'}
      </p>
    </main>
  )
}
