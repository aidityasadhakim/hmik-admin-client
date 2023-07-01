import ViewPost from "@/components/posts/ViewPost.component";
import Layout from "@/components/dashboard/Layout.component";

const page = ({ params }) => {
  return (
    <Layout>
      <ViewPost params={params}></ViewPost>
    </Layout>
  );
};

export default page;
