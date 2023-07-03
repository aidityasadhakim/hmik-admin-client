import Layout from "@/components/dashboard/Layout.component";
import { getSession } from "next-auth/react";

const Page = () => {
  return (
    <Layout>
      <h1>Selamat datang Admin</h1>
    </Layout>
  );
};

export default Page;
