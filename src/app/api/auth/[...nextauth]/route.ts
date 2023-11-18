import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import mongoose from "mongoose";
import { User } from "@/app/models/User";
import bcrypt from "bcrypt";

const handler = NextAuth({
    secret: process.env.SECRET,
    providers: [
        CredentialsProvider({
            name: "Credentials",
            id: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const email = credentials?.email;
                const password = credentials?.password;

                if (email && password) {
                    mongoose.connect(process.env.MONGODB_URI);
                    const user = await User.findOne({ email });
                    const passwordOk = user && bcrypt.compareSync(password as string, user.password);
                    if (passwordOk) {
                        return user;
                    }
                }
                return null;
            }
        })
    ]
})

export { handler as GET, handler as POST }