"use client";

import { ThemeContextProvider } from "./ContextExample";
import PageContent from "./PageContent";

const page = () => {
  return (
    <ThemeContextProvider>
      <PageContent />
    </ThemeContextProvider>
  );
};

export default page;
