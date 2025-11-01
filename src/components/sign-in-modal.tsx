import type { ReactNode } from 'react'
import { SignInWithGithubButton } from './sign-in-with-github-button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

interface SignInModalProps {
  children: ReactNode
}

export function SignInModal({ children }: SignInModalProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-md">
        <DialogHeader>
          <DialogTitle>Sign in</DialogTitle>
          <DialogDescription>Sign in to continue to app</DialogDescription>
        </DialogHeader>

        <div className="py-4 flex items-center justify-center">
          <SignInWithGithubButton />
        </div>
      </DialogContent>
    </Dialog>
  )
}
