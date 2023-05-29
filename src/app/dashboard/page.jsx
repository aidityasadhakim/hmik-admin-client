"use client";
import React from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import Link from 'next/navigation'
export const metadata = {
  title: 'HMIK Dashboard Admin ',
}

const Page = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  )
}

export default Page