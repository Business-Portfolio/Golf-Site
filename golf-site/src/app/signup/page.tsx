import SignUpForm from "@/components/auth/SignupForm"
import AuthLayout from "@/components/auth/AuthLayout"

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Enter your details below to create your account and get started."
      linkText="Already have an account?"
      linkHref="/login"
      linkLabel="Login"
    >
      <SignUpForm />
    </AuthLayout>
  )
}