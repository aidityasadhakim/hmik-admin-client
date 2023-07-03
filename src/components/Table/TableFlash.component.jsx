"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const TableFlash = ({ setSuccessMsg }) => {
  const searchParams = useSearchParams();

  const success = searchParams.get("success");
  const message = searchParams.get("message");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (success === "true") {
      setSuccessMsg(message);
    }
    router.replace(pathname);
  }, []);

  return <></>;
};

export default TableFlash;
