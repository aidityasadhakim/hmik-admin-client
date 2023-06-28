"use client";
import { Button } from "flowbite-react";
import { FaSave, FaBan } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { string_to_slug } from "@/utils/slug";
import Select from "react-select";
import api from "@/api";

const CreateCompetition = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [categoryId, setCategoryId] = useState(0);
  const [optionsCategory, setOptionsCategory] = useState([]);
  const titleRef = useRef();

  useEffect(() => {
    setOptionsCategory([]);
    const getCategory = async () => {
      try {
        const response = await api.get("/category");
        const category = response.data.data;
        category.map((cat) => {
          setOptionsCategory((options) => [
            ...options,
            {
              value: cat.id,
              label: cat.name,
            },
          ]);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);

  useEffect(() => {
    const titleToSlug = string_to_slug(title);
    setSlug(titleToSlug);
  }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="w-5/6 relative mx-auto max-w-screen-xl p-1 lg:px-5p text-[25px] font-bold">
        Create Post
      </h1>
      <section className="w-5/6 bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg  mx-auto max-w-screen-xl p-5 lg:px-5p">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              id="title"
              name="title"
              placeholder="Insert title here"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              ref={titleRef}
              required
              autoComplete="off"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="slug"
            >
              Slug
            </label>
            <input
              className="bg-[#e6e6e6] w-full px-3 py-2 border border-gray-300 rounded-md"
              type="text"
              id="slug"
              name="slug"
              placeholder="Slug will be created automatically"
              value={slug}
              disabled
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="category"
            >
              Category
            </label>

            <Select
              className=""
              name="category"
              options={optionsCategory}
              isSearchable={false}
              onChange={(choice) => setCategoryId(choice.value)}
            ></Select>
          </div>

          <div className="flex flex-row justify-between items-center space-y-0 p-4 text-black">
            <Button size={"md"} gradientMonochrome="success" type="submit">
              <FaSave className="mr-2 h-5 w-5"></FaSave>
              <p>Submit</p>
            </Button>

            <Button size={"md"} gradientMonochrome="failure">
              <FaBan className="mr-2 h-5 w-5"></FaBan>
              <p>Cancel</p>
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default CreateCompetition;
