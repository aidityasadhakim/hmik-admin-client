"use client";
import parse from "html-react-parser";
import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const SinglePost = ({ post }) => {
  const router = useRouter();
  return (
    <section className="w-full flex flex-col gap-[20px] bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg  mx-auto max-w-screen-xl px-5 pt-5 pb-[50px] lg:px-5p">
      <Button
        className="w-[30%] md:w-[10%]"
        onClick={() => router.back()}
        gradientDuoTone="purpleToBlue"
      >
        <FaArrowAltCircleLeft className="mr-[5px] text-[20px]"></FaArrowAltCircleLeft>
        Back
      </Button>
      <h1 className="font-bold text-[34px]">{post.title}</h1>
      <div className="flex flex-row space-between w-full md:w-[50%] justify-between">
        <div>
          <h5>
            Created by: <span className="opacity-75">{post.author.name}</span>
          </h5>
        </div>

        <div>
          <h5>
            Category: <span className="opacity-75">{post.category.name}</span>
          </h5>
        </div>
      </div>

      <img className="w-2/3 md:w-[500px]" src={post.image} alt="image header" />

      {parse(post.body)}
    </section>
  );
};

export default SinglePost;
