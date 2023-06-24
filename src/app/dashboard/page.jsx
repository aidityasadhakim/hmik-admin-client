"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
export const metadata = {
  title: "HMIK Dashboard Admin ",
};

const Page = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Page;
