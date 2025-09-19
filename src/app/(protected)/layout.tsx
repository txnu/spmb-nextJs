/** @format */

import { SidebarProvider } from "@/components/context/sidebarContext";
import React from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "@/presentation/layouts/Sidebar";
import Header from "@/presentation/layouts/Header";
import { BreadCrumbUI } from "@/presentation/layouts/BreadCrumb";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      <SidebarProvider>
        <div className='flex h-screen'>
          <Sidebar />
          <main className='flex flex-col flex-1 min-w-0'>
            <Header />
            <div className='flex-1 overflow-auto md:px-6 bg-gray-100'>
              <BreadCrumbUI />
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </AnimatePresence>
  );
}
