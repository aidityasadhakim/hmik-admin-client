import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 5 * 60 * 60,
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // const response = await api.post(
          //   "/login",
          //   {
          //     email: credentials?.email,
          //     password: credentials?.password,
          //   },
          //   {
          //     headers: {
          //       "Content-Type": "application/json",
          //     },
          //   }
          // );

          // const user = response?.data?.data?.user;

          const user = {
            name: credentials?.name,
            accessToken: credentials?.accessToken,
            email: credentials?.email,
            id: credentials?.id,
          };

          if (user.email) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          return error;
        }
      },
    }),
  ],
};
