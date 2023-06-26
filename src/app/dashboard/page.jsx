import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Layout from "@/components/dashboard/Layout.component";
import Table from "@/components/Table/Table";

const Page = () => {
  const columns = [
    {
      colName: "Title",
      colObject: "title",
    },
    {
      colName: "Category",
      colObject: ["category", "name"],
    },
    {
      colName: "Author",
      colObject: ["author", "name"],
    },
  ];
  return (
    <Layout>
      <h1>Selamat datang Admin</h1>
      <Table columns={columns} />
    </Layout>
  );
};

export default Page;
