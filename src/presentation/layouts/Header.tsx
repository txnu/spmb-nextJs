/** @format */
"use client";

import { useSidebar } from "@/components/context/sidebarContext";
import { Bell, CircleUserRound, Menu, MessageCircle } from "lucide-react";

export default function Header() {
  const { toggle } = useSidebar();
  return (
    <header className='sticky w-full z-50 top-0 flex flex-row justify-between items-center bg-blue-800 border-b px-4 sm:px-8 py-4'>
      <div className='flex items-center gap-4'>
        <div>
          <button
            className='md:hidden p-2 border border-white rounded-lg text-white'
            onClick={toggle}>
            <Menu size={20} />
          </button>
        </div>
        <div>
          <h3 className='font-bold text-white text-2xl '>Dashboard</h3>
        </div>
      </div>

      <div className='flex justify-center items-center gap-6 text-white'>
        <Bell size={20} />
        <MessageCircle size={20} />
        <CircleUserRound size={20} />
      </div>
    </header>
  );
}
