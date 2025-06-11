import { LoginForm } from "@/components/LoginForm";
import { Toaster } from "@/components/ui/toaster";

export default function LoginPage() {
  return (
    <div className="container flex items-center justify-center min-h-screen py-12">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
      <Toaster />
    </div>
  );
}