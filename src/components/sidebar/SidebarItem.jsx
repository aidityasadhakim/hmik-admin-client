import Link from "next/link";

const SidebarItem = ({ path, name, activeLink }) => {
  console.log(path.test(activeLink));
  return (
    <>
      <li
        className={`rounded-lg  ${
          path.test(activeLink)
            ? "bg-blue-700 text-[#ffffff]"
            : "bg-white text-black-700"
        }`}
      >
        <Link
          href={path}
          className="flex items-center p-2 text-black rounded-lg dark:text-black  dark:hover:bg-gray-700"
        >
          <svg
            aria-hidden="true"
            className={`w-6 h-6 transition duration-75 ${
              path.test(activeLink) ? "text-white" : "text-gray-500"
            } dark:text-black400 group-hover:text-gray-900 dark:group-hover:text-white`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span
            className={` ${path.test(activeLink) ? "text-white ml-3" : "ml-3"}`}
          >
            {name}
          </span>
        </Link>
      </li>
    </>
  );
};

export default SidebarItem;
