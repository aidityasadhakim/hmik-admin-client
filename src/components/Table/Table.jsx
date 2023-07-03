"use client";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import LoadingTable from "./LoadingTable";
import TableItemModal from "./TableItemModal";
import TableItemContainer from "./TableItemContainer";
import DeleteItemModal from "./DeleteItemModal";
import { useTableContext } from "@/context/TableContext";
import api from "@/api";
import { privateApi } from "@/api";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Table = ({ columns, urlData, deleteUrl }) => {
  const { state, dispatch } = useTableContext();
  const { showModal, itemSlug, sourceUrl } = state;
  const fetcher = (...args) =>
    api.get(...args).then((res) => res.data.data.posts);
  const [productList, setProductList] = useState([]);
  const pathname = usePathname();
  const { data: products, error } = useSWR(urlData, fetcher);

  useEffect(() => {
    setProductList(products);
  }, [products]);

  useEffect(() => {
    dispatch({ type: "setSourceUrl", payload: pathname });
  }, []);

  const deleteItemHandler = async () => {
    try {
      dispatch({ type: "savingOn" });
      const response = await privateApi.post(`${deleteUrl}/${itemSlug}`);
      dispatch({ type: "savingOff" });
      dispatch({ type: "hideDeleteModal" });

      toast.success("Item successfully deleted!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // productList = products.filter((item) => item.slug != itemSlug);
      setProductList(productList.filter((item) => item.slug != itemSlug));
    } catch (error) {
      dispatch({ type: "savingOff" });
      dispatch({ type: "hideDeleteModal" });

      toast.error("Item not deleted!", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(error);
    }
  };
  const saveItemHandler = () => {
    dispatch({ type: "savingOn" });
    setTimeout(() => {
      dispatch({ type: "savingOff" });
      dispatch({ type: "hideModal" });
    }, 2000);
  };

  return (
    <section className="p-2">
      <div
        className={`mx-auto max-w-screen-xl px-1 lg:px-5 ${
          showModal ? "blur-lg" : ""
        }`}
      >
        {productList ? (
          <TableItemContainer
            deleteItemHandler={deleteItemHandler}
            products={productList}
            columns={columns}
          />
        ) : (
          <LoadingTable />
        )}
      </div>
      <TableItemModal saveItemHandler={saveItemHandler} />
      <DeleteItemModal deleteItemHandler={deleteItemHandler} />
    </section>
  );
};

export default Table;
