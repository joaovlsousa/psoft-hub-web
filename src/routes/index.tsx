import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRightIcon } from 'lucide-react'
import { Logo } from '@/components/logo'
import { SignInModal } from '@/components/sign-in-modal'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/use-auth'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  const { token } = useAuth()

  return (
    <main className="min-h-screen flex flex-col items-center space-y-10 p-6 lg:py-16">
      <div className="py-1 px-7 rounded-full bg-foreground/5 ring ring-primary">
        <Logo />
      </div>

      <div className="max-w-2xl space-y-4 text-center">
        <h1 className="text-4xl font-bold leading-snug tracking-tight sm:text-5xl">
          Free repo for your software projects
        </h1>
        <p className="text-lg font-medium text-muted-foreground">
          Save and share your software projects
        </p>

        {token ? (
          <Link to="/projects">
            <Button size="lg">
              Go to app
              <ArrowRightIcon className="size-4" />
            </Button>
          </Link>
        ) : (
          <SignInModal>
            <Button size="lg">
              Get started
              <ArrowRightIcon className="size-4" />
            </Button>
          </SignInModal>
        )}
      </div>

      {/* TODO: Add app screen */}
      <div className="w-full bg-zinc-900 aspect-video rounded-md shadow-lg shadow-black/10 ring ring-black/10" />
      {/* <img
        src="/app-screen.webp"
        alt="App screen"
        className="w-full aspect-video rounded-md shadow-lg shadow-black/10 ring ring-black/10"
      /> */}
    </main>
  )
}
