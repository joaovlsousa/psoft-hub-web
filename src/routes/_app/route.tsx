import { createFileRoute, Outlet, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useAuth } from '@/hooks/use-auth'

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const { token, clearToken } = useAuth()

  useEffect(() => {
    if (!token) {
      navigate({ to: '/' })
    }
  }, [token, navigate])

  return (
    <div>
      Hello "/_app"!
      <button type="button" onClick={clearToken}>
        sair
      </button>
      <Outlet />
    </div>
  )
}
