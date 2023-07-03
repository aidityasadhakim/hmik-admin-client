"use client";
import { useRef, useState, useEffect } from "react";
import api from "@/api";
import { signIn } from "next-auth/react";

const LOGIN_URL = "/login";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);

      if (response.status === 200 && response.data.data.user) {
        const result = await signIn("credentials", {
          email: email,
          name: response?.data?.data?.user?.name,
          accessToken: response.data?.data?.accessToken,
          id: response.data?.data?.user?.id,
          redirect: true,
          callbackUrl: "/",
        });
      } else {
        throw new Error(response?.data?.error);
      }

      // console.log(result);
      // if (result.ok) {
      //   // window.location.replace("/");
      // } else {
      //   console.log("idk");
      //   console.log(result?.error);
      //   setErrMsg(result?.error);
      // }
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server Response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (error.response?.status === 401) {
        setErrMsg("Wrong Email or Password");
      } else {
        setErrMsg("Login Failed");
      }
    }
  };

  return (
    <div className="bg-slate-200 form width-full">
      <form
        className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-lg"
        onSubmit={handleSubmit}
      >
        <p
          ref={errRef}
          className={`bg-red-400 p-[10px] rounded-md mb-[5px] ${
            errMsg ? "" : "hidden"
          }`}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h1 className="text-center font-bold mb-3">HMIK Admin</h1>
        <h2 className="text-md mb-6 text-center text-gray-400">Login</h2>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
            ref={userRef}
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            type="password"
            id="password"
            name="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        {/* <div className="flex items-center justify-between my-5">
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="remember"
                aria-describedby="remember"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="ml-3 text-sm">
              <label
                htmlFor="remember"
                className="text-gray-500 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
          </div>
        </div> */}

        <button
          className="w-full bg-blue-700 text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
