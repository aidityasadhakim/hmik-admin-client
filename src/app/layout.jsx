"use client";
import React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children, pageProps }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={pageProps?.session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
