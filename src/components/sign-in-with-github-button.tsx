import { GithubIcon } from 'lucide-react'
import { env } from '@/config/env'
import { Button } from './ui/button'

export function SignInWithGithubButton() {
  const signInUrl = new URL('https://github.com/login/oauth/authorize')
  signInUrl.searchParams.set('client_id', env.VITE_GITHUB_OAUTH_CLIENT_ID)
  signInUrl.searchParams.set(
    'redirect_uri',
    env.VITE_GITHUB_OAUTH_CLIENT_REDIRECT_URI,
  )
  signInUrl.searchParams.set('scope', 'user:email')

  return (
    <a href={signInUrl.toString()} className="w-full">
      <Button className="w-full" variant="secondary">
        <GithubIcon className="size-4" />
        Continue with github
      </Button>
    </a>
  )
}
