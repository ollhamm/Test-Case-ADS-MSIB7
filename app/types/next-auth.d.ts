// types/next-auth.d.ts
import NextAuth from "next-auth";
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Menambahkan ID pengguna ke sesi
    } & DefaultSession["user"];
  }

  interface User {
    id: string; // Menambahkan ID pengguna ke tipe User
  }
}
