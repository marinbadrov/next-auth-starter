import Logout from "@/components/logout";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h2 className="text-2xl mb-10">Simple auth example</h2>
      {!!session
        ? (
          <div className="flex flex-col space-y-4 items-center">
            <span>You are logged in as {session.user?.email}</span>
            <Logout />
          </div>
        )
        : (
          <div className="flex space-x-4 items-center">
            <Link href="/register" className="text-xl flex items-center">
              <Button variant="outline">REGISTER</Button>
            </Link>
            <Link href="/login" className="text-xl flex items-center">
              <Button variant="outline">LOGIN</Button>
            </Link>
          </div>
        )}
    </main>
  );
}
