import { useParams } from "next/navigation";

const Page = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Page;
