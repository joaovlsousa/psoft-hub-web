import { Cookies } from 'react-cookie'
import { useAuth } from '@/hooks/use-auth'
import { api } from '@/lib/axios'

api.interceptors.request.use((config) => {
  const token: string | undefined = new Cookies().get('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { clearToken } = useAuth()

    if (error.response?.status === 401) {
      clearToken()
    }

    return Promise.reject(error)
  },
)
