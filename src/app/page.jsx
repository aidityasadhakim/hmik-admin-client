import { redirect } from "next/navigation";

export const metadata = {
  title: "HMIK Login Admin ",
};

const Page = async () => {
  redirect("/dashboard");
};

export default Page;
