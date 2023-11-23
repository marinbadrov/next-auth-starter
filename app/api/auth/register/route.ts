import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const hashedPassword = await hash(password, 10);
    console.log({ email, hashedPassword });

    const response = await sql`
      INSERT INTO users (email, password)
      VALUES (${email}, ${hashedPassword})
    `;

    console.log(response);

    return NextResponse.json({ message: "Hi " });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
