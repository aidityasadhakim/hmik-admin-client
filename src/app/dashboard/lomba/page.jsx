import Layout from "@/components/dashboard/Layout.component";
import TableLayout from "@/components/Table/TableLayout";

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
      <TableLayout
        columns={columns}
        urlData={`${process.env.API_URL}/posts?category=competition`}
        deleteUrl={`${process.env.API_URL}/posts/delete`}
      />
    </Layout>
  );
};

export default page;
