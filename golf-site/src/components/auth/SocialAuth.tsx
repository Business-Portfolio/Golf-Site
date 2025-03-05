import { FaDiscord, FaGithub} from 'react-icons/fa'
import { FcGoogle } from "react-icons/fc";

interface SocialAuthProps {
  isSignUp?: boolean
}

export default function SocialAuth({ isSignUp = false }: SocialAuthProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-emerald-600"
      >
        <FcGoogle className="h-5 w-5" />
        <span className="sr-only">{isSignUp ? "Sign up" : "Sign in"} with Google</span>
      </button>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-emerald-600"
      >
        <FaDiscord className="h-5 w-5 text-indigo-500" />
        <span className="sr-only">{isSignUp ? "Sign up" : "Sign in"} with Discord</span>
      </button>

      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-2 focus-visible:ring-emerald-600"
      >
        <FaGithub className="h-5 w-5" />
        <span className="sr-only">{isSignUp ? "Sign up" : "Sign in"} with Github</span>
      </button>
    </div>
  )
}