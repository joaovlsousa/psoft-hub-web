import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/projects/$projectId/edit/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { projectId } = Route.useParams()

  return <div>Hello "/_app/projects/{projectId}/edit/"!</div>
}
