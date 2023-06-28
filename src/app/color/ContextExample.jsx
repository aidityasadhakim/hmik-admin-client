// app/context/theme.js

"use client";

import { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext({});

const applicationReducer = (state, action) => {
  const { key, type, value } = action;

  switch (type) {
    case "toggleHeader": {
      const newState = { ...state };
      newState.isShowing = !newState.isShowing;
      return newState;
    }

    default: {
      return state;
    }
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(applicationReducer, {
    isShowing: false,
  });

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
