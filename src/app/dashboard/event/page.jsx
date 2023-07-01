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
        urlData={`/posts?category=event`}
        deleteUrl={`/posts/delete`}
      />
    </Layout>
  );
};

export default page;
