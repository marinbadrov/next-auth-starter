import { ArrowRight, ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="text-2xl mb-10">Simple auth example</h2>

      <Link href="/register" className="text-xl mb-4 flex items-center"><ArrowRight /> Register an account</Link>
      <Link href="/login" className="text-xl flex items-center"><ArrowRight /> Login to your account</Link>
    </main>
  );
}
