"use client";
import Link from "next/link";
import { signOut, useSession, getSession } from "next-auth/react";
import { privateApi } from "@/api";
import { useEffect } from "react";

const Navbar = () => {
  const getAccessToken = async () => {
    try {
      const session = await getSession();
      const accessToken = session?.user?.accessToken;
      // console.log(session?.user);
      try {
        privateApi.defaults.headers.common = {
          Authorization: `Bearer ${accessToken}`,
        };
      } catch (error) {
        console.log(error.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAccessToken();
  }, []);

  const { data: session } = useSession();

  const signOutHandler = async () => {
    signOut();
    try {
      const res = await privateApi.post("/logout");
      console.log(res?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="fixed z-50 top-0 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 ">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <Link href="/" className="flex ml-2 md:mr-24">
              <img src="/logo-up.svg" className="h-8 mr-4" alt="logo up" />
              <img src="/logo-hmik.png" className="h-8 mr-4" alt="logo up" />
              <img
                src="/logo-hmik-text.png"
                className="h-8 mr-4"
                alt="logo up"
              />
            </Link>
          </div>
          <div className="flex items-center">
            {/* <div>
              <button
                id="dropdownNotificationButton"
                data-dropdown-toggle="dropdownNotification"
                className="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                type="button"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                </svg>
                <div className="relative flex">
                  <div className="relative inline-flex w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-2 right-3 dark:border-gray-900"></div>
                </div>
              </button>
              <div
                id="dropdownNotification"
                className="z-20 hidden w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700"
                aria-labelledby="dropdownNotificationButton"
              >
                <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
                  Notifications
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="rounded-full w-11 h-11"
                        src="/docs/images/people/profile-picture-1.jpg"
                        alt="Jese image"
                      />
                      <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                        <svg
                          className="w-3 h-3 text-white"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                          <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="w-full pl-3">
                      <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                        New message : "Ada yang daftar lomba nih!"
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-500">
                        a few moments ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="rounded-full w-11 h-11"
                        src="/docs/images/people/profile-picture-2.jpg"
                        alt="Joseph image"
                      />
                      <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-800">
                        <svg
                          className="w-3 h-3 text-white"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="w-full pl-3">
                      <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                        New message : "Ada yang daftar lomba nih!"
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-500">
                        10 minutes ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="rounded-full w-11 h-11"
                        src="/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie image"
                      />
                      <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-800">
                        <svg
                          className="w-3 h-3 text-white"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="w-full pl-3">
                      <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                        New message : "Ada yang daftar lomba nih!"
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-500">
                        44 minutes ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="rounded-full w-11 h-11"
                        src="/docs/images/people/profile-picture-4.jpg"
                        alt="Leslie image"
                      />
                      <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 border border-white rounded-full dark:border-gray-800">
                        <svg
                          className="w-3 h-3 text-white"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="w-full pl-3">
                      <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                        New message : "Ada yang daftar lomba nih!"
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-500">
                        1 hour ago
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <div className="flex-shrink-0">
                      <img
                        className="rounded-full w-11 h-11"
                        src="/docs/images/people/profile-picture-5.jpg"
                        alt="Robert image"
                      />
                      <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 border border-white rounded-full dark:border-gray-800">
                        <svg
                          className="w-3 h-3 text-white"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="w-full pl-3">
                      <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                        New message : "Ada yang daftar lomba nih!"
                      </div>
                      <div className="text-xs text-blue-600 dark:text-blue-500">
                        3 hours ago
                      </div>
                    </div>
                  </a>
                </div>
                <a
                  href="#"
                  className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                >
                  <div className="inline-flex items-center ">
                    <svg
                      className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    View all
                  </div>
                </a>
              </div>
            </div> */}
            {/* End of Notif */}
            <div className="flex items-center ml-3">
              <div>
                <button
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="user photo"
                  />
                </button>
              </div>
              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="dropdown-user"
              >
                <div className="px-4 py-3" role="none">
                  <p
                    className="text-sm text-gray-900 dark:text-white"
                    role="none"
                  >
                    {session?.user?.name}
                  </p>
                  <p
                    className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                    role="none"
                  >
                    {session?.user?.email}
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <button
                      href="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => signOutHandler()}
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
