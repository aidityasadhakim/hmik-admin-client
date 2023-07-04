"use client";
import { Button, FileInput, Alert } from "flowbite-react";
import { FaSave, FaBan } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { string_to_slug } from "@/utils/slug";
import Select from "react-select";
import api from "@/api";
import { privateApi } from "@/api";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const ReactQuill =
  typeof window === "object" ? require("react-quill") : () => false;

const CreateCompetition = ({ categoryId, sourceUrl }) => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [subCategoryId, setSubCategoryId] = useState(0);
  const [optionsCategory, setOptionsCategory] = useState([]);
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("null");
  const [errMsg, setErrMsg] = useState("");
  const { data: session } = useSession();
  const router = useRouter();

  const titleRef = useRef();

  useEffect(() => {
    setOptionsCategory([]);
    const getCategory = async () => {
      try {
        const response = await api.get("/subcategory");
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
        setErrMsg(error?.message);
      }
    };
    getCategory();
  }, []);

  useEffect(() => {
    const titleToSlug = string_to_slug(title);
    setSlug(titleToSlug);
  }, [title]);

  const handleImageValidation = (e) => {
    const image = e.target.files[0];
    if (!image) {
      setErrMsg("image is required");
      return false;
    }
    if (!image.name.match(/\.(jpg|jpeg|png|gif|webp|JPG)$/)) {
      setErrMsg("Select valid image.");
      e.target.value = null;
      return false;
    }
    setErrMsg("");
    setImage(image);
  };

  const handleFile = async () => {
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", process.env.NEXT_PUBLIC_UNSIGNED_PRESET);
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`,

        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      const error = data.error;
      console.log(data);

      if (
        image &&
        (data.secure_url !== "null" || data.secure_url !== undefined)
      ) {
        setImageUrl(data.secure_url);
        return true;
      }
      throw new Error(error?.message);
    } catch (error) {
      setErrMsg(error?.message);
      throw new Error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleFile();
      try {
        const response = await privateApi.post("/posts/create", {
          title: title,
          slug: slug,
          category_id: categoryId,
          body: body,
          image: imageUrl,
          user_id: session.user.id,
          sub_category_id: subCategoryId,
        });
        router.push(`${sourceUrl}?success=true&message=Post Created!`);
      } catch (error) {
        if (error.response) {
          throw new Error(error?.response?.data?.error);
        } else {
          throw new Error(error.message);
        }
      }
    } catch (error) {
      if (error.message) {
        setErrMsg(error.message);
      } else {
        setErrMsg(error);
      }
    }
  };

  return (
    <section className="my-5">
      <h1 className="w-5/6 relative mx-auto max-w-screen-xl p-1 lg:px-5p text-[25px] font-bold">
        Create Lomba
      </h1>
      <section className="w-5/6 bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg  mx-auto max-w-screen-xl p-5 lg:px-5p">
        <form onSubmit={handleSubmit}>
          {errMsg ? (
            <Alert
              className="mb-2"
              color="failure"
              onDismiss={() => setErrMsg("")}
            >
              <span>
                <p>
                  <span className="font-medium">Error! </span>
                  {errMsg}
                </p>
              </span>
            </Alert>
          ) : (
            ""
          )}

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
              onChange={(choice) => setSubCategoryId(choice.value)}
            ></Select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 "
              htmlFor="image"
            >
              Image
            </label>
            <FileInput
              className="w-1/2"
              onChange={handleImageValidation}
            ></FileInput>
            {/* <input type="file" onChange={handleImageValidation} /> */}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2 ">
              Body
            </label>
            <ReactQuill theme="snow" value={body} onChange={setBody} />
          </div>

          <div className="flex flex-row justify-between items-center space-y-0 p-4 text-black">
            <Button size={"md"} gradientMonochrome="success" type="submit">
              <FaSave className="mr-2 h-5 w-5"></FaSave>
              <p>Submit</p>
            </Button>

            <Button
              size={"md"}
              gradientMonochrome="failure"
              onClick={() => router.back()}
            >
              <FaBan className="mr-2 h-5 w-5"></FaBan>
              <p>Cancel</p>
            </Button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default CreateCompetition;
