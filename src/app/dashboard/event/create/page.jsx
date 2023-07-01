import Layout from "@/components/dashboard/Layout.component";
import CreateCompetition from "@/components/posts/CreateCompetition";

const page = () => {
  return (
    <Layout>
      <CreateCompetition
        categoryId={2}
        sourceUrl="/dashboard/event"
      ></CreateCompetition>
    </Layout>
  );
};

export default page;
