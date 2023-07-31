import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
// eslint-disable-next-line import/extensions
import User from "@/models/userSchema";
import { connect } from "@/dbConfig/dbConfig";

export const authOptions = {
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        try {
          await connect();
          // Add logic here to look up the user from the credentials supplied
          const { username, password } = credentials;
          console.log({ username, password });
          const user = await User.findOne({ username });
          console.log(user);
          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              // eslint-disable-next-line prettier/prettier
              user.password
            );
            if (isPasswordCorrect) {
              const signeduser = {
                name: user.username,
                email: user._id,
              };
              return signeduser;
            }
            return null;
          }
          return null;
        } catch (error) {
          console.log(error);
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
