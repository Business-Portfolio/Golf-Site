import LoginForm from "@/components/auth/LoginForm"
import AuthLayout from "@/components/auth/AuthLayout"

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Enter your credentials to access your account."
      linkText="Don't have an account?"
      linkHref="/signup"
      linkLabel="Sign up"
    >
      <LoginForm />
    </AuthLayout>
  )
}