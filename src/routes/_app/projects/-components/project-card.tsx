import { AlertCircleIcon, GithubIcon, LinkIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ProjectSettings } from './project-settings'

interface ProjectCardProps {
  project: {
    id: string
    name: string
    description: string
    type: 'frontend' | 'backend' | 'fullstack'
    imageUrl: string | null
    githubUrl: string
    deployUrl: string | null
    createdAt: string
    updatedAt: string | null
  }
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="space-y-2 pb-3 bg-sidebar/20 rounded-md border-0 shadow-none">
      <CardContent className="space-y-2">
        {project.imageUrl ? (
          <Dialog>
            <DialogTrigger asChild>
              <img
                src={project.imageUrl}
                alt="Project screen"
                className="aspect-video rounded-md cursor-zoom-in"
              />
            </DialogTrigger>
            <DialogContent className="p-0 max-w-5xl">
              <DialogTitle className="hidden" />
              <img
                src={project.imageUrl}
                alt="Project screen"
                className="aspect-video rounded-md"
              />
            </DialogContent>
          </Dialog>
        ) : (
          <div className="w-full flex items-center justify-center gap-2 rounded-t-md bg-sidebar/30 aspect-video">
            <AlertCircleIcon className="size-4 text-muted-foreground" />

            <span className="text-sm font-medium text-muted-foreground">
              Image not found
            </span>
          </div>
        )}

        <div className="px-2.5 space-y-1">
          <CardTitle className="text-lg font-semibold">
            {project.name}
          </CardTitle>
          <CardDescription className="text-sm font-medium text-muted-foreground text-justify">
            {project.description}
          </CardDescription>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-x-3">
          <Button
            asChild
            variant="secondary"
            size="icon"
            className="rounded-full"
          >
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              <GithubIcon className="size-5" />
            </a>
          </Button>

          {project.deployUrl && (
            <Button
              asChild
              variant="secondary"
              size="icon"
              className="rounded-full"
            >
              <a href={project.deployUrl} target="_blank" rel="noreferrer">
                <LinkIcon className="size-5" />
              </a>
            </Button>
          )}
        </div>

        <div className="flex items-center gap-x-3">
          <ProjectSettings projectId={project.id} />
        </div>
      </CardFooter>
    </Card>
  )
}
