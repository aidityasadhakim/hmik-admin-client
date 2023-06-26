"use client";
import { usePathname } from "next/navigation";

const page = () => {
  const pathname = usePathname();
  const isDashboard = /^\/dashboard\/.*/.test(pathname);
  return (
    <div>
      <h1>{isDashboard ? "Yes" : "No"}</h1>
    </div>
  );
};

export default page;
