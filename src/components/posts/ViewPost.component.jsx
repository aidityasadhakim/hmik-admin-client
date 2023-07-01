import api from "@/api";
import SinglePost from "./SinglePost.component";

async function getPost(params) {
  try {
    const res = await api.get(`/posts/${params.slug}`);
    const post = res?.data?.data;
    return post;
  } catch (error) {
    console.log(error);
    throw new Error(error?.message);
  }
}

const ViewPost = async ({ params }) => {
  const post = await getPost(params);
  console.log(post);
  return <SinglePost post={post}></SinglePost>;
};

export default ViewPost;
