"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export default async function Logout() {
  return <Button variant="outline" onClick={() => signOut()}>Logout</Button>;
}
