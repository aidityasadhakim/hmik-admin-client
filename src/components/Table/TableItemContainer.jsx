"use client";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import TableItem from "./TableItem";
import TableActions from "./TableActions";
import TableFooter from "./TableFooter";
import { useSearchParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Alert } from "flowbite-react";

const TableItemContainer = ({ products, columns }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const searchParams = useSearchParams();
  const success = searchParams.get("success");
  const message = searchParams.get("message");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (success === "true") {
      setSuccessMsg(message);
    }
    router.replace(pathname);
  }, []);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };
  let pageSize = 10;
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const totalPages = Math.ceil(products.length / pageSize);

  //search filter
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const filteredData = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentData = filteredData.slice(startIndex, endIndex);

  return (
    <div className="bg-white w-full dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
      {errMsg ? (
        <div className="px-3 py-2 mt-5">
          <Alert
            className="m-3"
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
        </div>
      ) : (
        ""
      )}

      {successMsg ? (
        <Alert
          className="mb-2"
          color="success"
          onDismiss={() => setSuccessMsg("")}
        >
          <span>
            <p>
              <span className="font-medium">Success! </span>
              {successMsg}
            </p>
          </span>
        </Alert>
      ) : (
        ""
      )}
      <TableActions searchTerm={searchTerm} handleSearch={handleSearch} />
      <div className="overflow-x-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <TableItem columns={columns} items={currentData} />
        </div>
      </div>
      <TableFooter
        totalPages={totalPages}
        handleChangePage={handleChangePage}
        currentPage={currentPage}
      />
      {/* <DeleteToast /> */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default TableItemContainer;
