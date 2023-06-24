"use client";
import { useSession, getSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Welcome to the protected route {session?.user?.name}</h1>
    </div>
  );
};

export default page;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: {
      session: session,
    },
  };
}
