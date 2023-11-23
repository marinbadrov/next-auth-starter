import LoginForm from "./form";

export default async function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
    </div>
  );
}
