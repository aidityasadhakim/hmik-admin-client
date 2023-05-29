"use client";
import React from 'react'
import Link from "next/link";

export const metadata = {
  title: 'HMIK Login Admin ',
}

const Page = () => {
  return (
    <div className="bg-slate-200 form width-full" >
        <form className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-lg">
          <h1 className="text-center font-bold mb-3">HMIK Admin</h1>
          <h2 className="text-md mb-6 text-center text-gray-400">Login</h2>
          <div className="mb-4">  
              <label className="block text-gray-700 text-sm font-bold mb-2"  htmlFor="email">
              Email
              </label>
              <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
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
              />
          </div>
          <div className="flex items-center justify-between my-5">
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
                  <label  htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                  Remember me
                  </label>
              </div>
              </div>
          </div>
        
          <Link
            href="pages/dashboard"
          >
            <button
                className="w-full bg-blue-700 text-white text-sm font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300"
                type="button"
                >
                Login
            </button>
          </Link>
              
          
        </form>
    </div>
  )
}

export default Page