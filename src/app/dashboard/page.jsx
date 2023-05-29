"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Link from "next/navigation";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Page;
