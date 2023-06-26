"use client";
import { useSession, getSession } from "next-auth/react";

const Page = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Welcome to the protected route {session?.user?.name}</h1>
    </div>
  );
};

export default Page;
