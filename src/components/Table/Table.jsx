"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSWR from "swr";
import LoadingTable from "./LoadingTable";
import TableItemModal from "./TableItemModal";
import TableItemContainer from "./TableItemContainer";
import api from "@/api";

const Table = ({ columns }) => {
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const fetcher = (...args) =>
    api.get(...args).then((res) => res.data.data.posts);
  const { data: products, error } = useSWR(
    "http://127.0.0.1:8000/api/posts",
    fetcher
  );

  const deleteItemHandler = () => {
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
  };
  const saveItemHandler = () => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      setShowModal(false);
    }, 2000);
  };

  return (
    <section className="p-2">
      <div
        className={`mx-auto max-w-screen-xl px-2 lg:px-12 ${
          showModal ? "blur-lg" : ""
        }`}
      >
        {products ? (
          <TableItemContainer
            setShowModal={setShowModal}
            deleteItemHandler={deleteItemHandler}
            products={products}
            columns={columns}
          />
        ) : (
          <LoadingTable />
        )}
      </div>
      <TableItemModal
        setShowModal={setShowModal}
        saveItemHandler={saveItemHandler}
        showModal={showModal}
        saving={saving}
      />
    </section>
  );
};

export default Table;
