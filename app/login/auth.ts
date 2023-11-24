import { sql } from "@vercel/postgres";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type User = {
  id: number;
  username: string;
  email: string;
};

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, _) {
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
            username: user.username,
          };
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user as User;
      }
      return session;
    },
  },
};

