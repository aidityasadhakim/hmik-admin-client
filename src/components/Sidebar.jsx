import Link from 'next/link'
import {usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { initFlowbite } from 'flowbite';


const Sidebar = () => {
    const [activeLink, setActiveLink] = useState('');
      const pathname = usePathname();
      useEffect(() => {
        //get current url path
        setActiveLink(pathname);
          //init flowbite
          initFlowbite();
      }, [pathname]);
  return (
    <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul className="space-y-2 font-medium space-between">
                <li className={`rounded-lg  ${activeLink === '/dashboard/users' ? 'bg-blue-700 text-black' : 'bg-white text-black-700'}`}>
                    <Link href="/dashboard/users" className="flex items-center p-2 text-black rounded-lg dark:text-black  dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className={`w-6 h-6 transition duration-75 ${activeLink === '/dashboard/users' ? 'text-white' : 'text-gray-500'} dark:text-black400 group-hover:text-gray-900 dark:group-hover:text-white`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        <span className={` ${activeLink === '/dashboard/users' ? 'text-white ml-3' : 'ml-3'}`} >Lomba</span>
                    </Link>
                </li>
                <li className={`rounded-lg  ${activeLink === '/dashboard/users' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700'}`}>
                    <Link href="/dashboard/users" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black  dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className={`w-6 h-6 transition duration-75 ${activeLink === '/dashboard/users' ? 'text-white' : 'text-gray-500'} dark:text-black400 group-hover:text-gray-900 dark:group-hover:text-white`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        <span className={` ${activeLink === '/dashboard/users' ? 'text-white ml-3' : 'ml-3'}`} >Seminar</span>
                    </Link>
                </li>
                <li className={`rounded-lg  ${activeLink === '/dashboard/users' ? 'bg-blue-700 text-white' : 'bg-white text-gray-700'}`}>
                    <Link href="/dashboard/users" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-black  dark:hover:bg-gray-700">
                        <svg aria-hidden="true" className={`w-6 h-6 transition duration-75 ${activeLink === '/dashboard/users' ? 'text-white' : 'text-gray-500'} dark:text-black400 group-hover:text-gray-900 dark:group-hover:text-white`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                        <span className={` ${activeLink === '/dashboard/users' ? 'text-white ml-3' : 'ml-3'}`} >Acara</span>
                    </Link>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default Sidebar