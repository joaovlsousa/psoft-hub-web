import { useMutation } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { AxiosError } from 'axios'
import { toast } from 'sonner'
import { useAuth } from '@/hooks/use-auth'
import { api } from '@/lib/axios'

export function useSignInWithGithub(code: string) {
  const { saveToken } = useAuth()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: async () => {
      const response = await api.post<{ token: string }>('/sessions/github', {
        code,
      })
      return response.data.token
    },
    onSuccess: (token) => {
      saveToken(token)
      navigate({ to: '/projects' })
    },
    onError: (error) => {
      let message = 'Something went wrong'

      if (error instanceof AxiosError) {
        message = error.response?.data.message
      }

      toast.error(message)
      navigate({ to: '/' })
    },
  })
}
