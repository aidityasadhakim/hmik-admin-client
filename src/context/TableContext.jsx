"use client";

import { createContext, useContext, useReducer, useState } from "react";

const TableContext = createContext({});

const applicationReducer = (state, action) => {
  const { key, type, value, payload } = action;

  switch (type) {
    case "showModal": {
      const newState = { ...state };
      newState.showModal = true;
      return newState;
    }

    case "hideModal": {
      const newState = { ...state };
      newState.showModal = false;
      return newState;
    }

    case "showDeleteModal": {
      const newState = { ...state };
      newState.showDeleteModal = true;
      newState.itemSlug = payload;
      return newState;
    }

    case "hideDeleteModal": {
      const newState = { ...state };
      newState.showDeleteModal = false;
      return newState;
    }

    case "savingOn": {
      const newState = { ...state };
      newState.saving = true;
      return newState;
    }

    case "savingOff": {
      const newState = { ...state };
      newState.saving = false;
      return newState;
    }

    case "insertId": {
      const newState = { ...state };
      newState.itemSlug = payload;
      return newState;
    }

    default: {
      return state;
    }
  }
};

export const TableContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(applicationReducer, {
    showModal: false,
    showDeleteModal: false,
    saving: false,
    itemSlug: null,
  });
  // const [itemId, setItemId] = useState("");
  // const [showModal, setShowModal] = useState(false);
  // const [showDeleteModal, setShowDeleteModal] = useState(false);
  // const [saving, setSaving] = useState(false);

  return (
    <TableContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

export const useTableContext = () => useContext(TableContext);
