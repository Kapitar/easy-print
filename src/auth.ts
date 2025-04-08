import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createUser, isUserCreated } from "./db/repositories/userRepository";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],

  callbacks: {
    async signIn({ profile }) {
      if (!profile?.email) return false;

      const isCreated = await isUserCreated(profile?.email);
      if (!isCreated) {
        await createUser(profile.name ?? profile.email, profile.email);
      }
      return true; // Allow sign in
    },
  },
});
