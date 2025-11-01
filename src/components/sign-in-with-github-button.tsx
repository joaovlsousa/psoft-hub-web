import { GithubIcon } from 'lucide-react'
import { Button } from './ui/button'

export function SignInWithGithubButton() {
  return (
    <Button className="w-full" variant="secondary">
      <GithubIcon className="size-4" />
      Continue with github
    </Button>
  )
}
