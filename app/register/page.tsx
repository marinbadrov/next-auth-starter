import RegisterForm from "./form";

export default async function RegisterPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <RegisterForm />
    </div>
  );
}
