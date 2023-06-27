import Layout from "@/components/dashboard/Layout.component";
import Table from "@/components/Table/Table";

const page = () => {
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
      <Table columns={columns} />
    </Layout>
  );
};

export default page;
