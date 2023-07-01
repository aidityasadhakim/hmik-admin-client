import Layout from "@/components/dashboard/Layout.component";
import CreateCompetition from "@/components/competition/CreateCompetition";

const page = () => {
  return (
    <Layout>
      <CreateCompetition
        categoryId={1}
        sourceUrl="/dashboard/lomba"
      ></CreateCompetition>
    </Layout>
  );
};

export default page;
