import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/buttons/buttons.component";

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { User } from "@/components/user/user.component";

export const metadata = {
  title: "HMIK Login Admin ",
};

const Page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />
      </div>
      <br />
      <h1>Server Session</h1>
      <br />
      <pre>{JSON.stringify(session)}</pre>
      <br />
      <User />
    </main>
  );
};

export default Page;
