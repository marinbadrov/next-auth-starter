import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(req: Request) {
  try {
    const { email, password, username } = await req.json();
    const hashedPassword = await hash(password, 10);

    // check if email taken
    const usersResponse = await sql`SELECT * FROM users WHERE email=${email}`;
    if (usersResponse.rows[0]) {
      return NextResponse.error();
    }

    // create user
    await sql`
      INSERT INTO users (username, email, password)
      VALUES (${username}, ${email}, ${hashedPassword})
    `;

    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
