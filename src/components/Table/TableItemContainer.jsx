"use client";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import TableItem from "./TableItem";
import TableActions from "./TableActions";
import TableFooter from "./TableFooter";

const TableItemContainer = ({ products, columns }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

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
