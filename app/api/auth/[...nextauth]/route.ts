import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { sql } from "@vercel/postgres";
import { compare } from "bcrypt";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const res =
          await sql`SELECT * FROM users WHERE email=${credentials?.email}`;

        const user = res.rows[0];

        const isPasswordCorrect = await compare(
          credentials?.password || "",
          user?.password,
        );

        // If no error and we have user data, return it
        if (user && isPasswordCorrect) {
          return {
            id: user.id,
            email: user.email,
          };
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
