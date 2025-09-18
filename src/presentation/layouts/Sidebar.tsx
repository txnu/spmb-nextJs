/** @format */
"use client";
import {
  Banknote,
  ChevronLeft,
  ChevronRight,
  CircleUser,
  Gauge,
  Grid2X2Plus,
  IdCard,
  LayoutList,
  ShoppingCart,
  Users,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/components/context/sidebarContext";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Sidebar() {
  const { isOpen, close } = useSidebar();
  const pathname = usePathname();

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };
  return (
    <>
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/50 z-40 md:hidden'
          onClick={close}
        />
      )}
      <aside
        className={`fixed md:static z-60 px-4 py-3 w-72 shrink-0 max-w-full bg-blue-800 min-h-screen transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 md:translate-x-0`}>
        <div className='flex flex-row justify-between items-center py-2'>
          <h5 className='text-2xl px-4 text-white font-medium'>Admin Kedra</h5>
          <div
            className='flex items-center p-2 text-white border rounded-lg md:hidden'
            onClick={close}>
            <ChevronLeft size={20} />
          </div>
        </div>
        <nav className='w-full px-2 mx-auto my-2 transition-all duration-300'>
          <ul className='grid grid-cols-1 gap-2 text-white text-sm font-medium'>
            <li>
              <Link
                href='/dashboard'
                className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-white/75 hover:text-black cursor-pointer w-full ${
                  pathname === "/dashboard" ? "bg-white/75 text-black" : ""
                }`}>
                <Gauge size={20} />
                Dashboard
              </Link>
            </li>
            <hr className='text-gray-500 my-2' />
            <li className=''>
              <Link
                href='/spmb'
                className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-white/75 hover:text-black cursor-pointer ${
                  pathname === "/spmb" ? "bg-white/75 text-black" : ""
                }`}>
                <IdCard size={20} />
                <span>SPMB</span>
              </Link>
            </li>
            <li className=''>
              <Link
                href='/siswa'
                className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-white/75 hover:text-black cursor-pointer ${
                  pathname === "/siswa" ? "bg-white/75 text-black" : ""
                }`}>
                <Users size={20} />
                <span>Siswa</span>
              </Link>
            </li>
            <li
              className={`flex items-center text-sm justify-between gap-2 py-2 px-4 rounded-md hover:bg-white/75 hover:text-black cursor-pointer ${
                pathname.includes("/menu-siswa") ? "bg-white/75 text-black" : ""
              }`}
              onClick={() => toggleDropdown("menu_siswa")}>
              <div className='flex gap-4 items-center'>
                <LayoutList size={20} />
                <span>Menu Siswa</span>
              </div>
              <motion.div
                animate={{ rotate: openDropdown === "menu_siswa" ? 90 : 0 }}
                transition={{ duration: 0.3 }}>
                <ChevronRight size={20} />
              </motion.div>
            </li>
            <AnimatePresence>
              {openDropdown === "menu_siswa" && (
                <motion.ul
                  initial={{ height: 0, y: -10 }}
                  animate={{ height: "auto", y: 0 }}
                  exit={{ height: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className='pl-10 flex flex-col gap-2 text-gray-200 overflow-hidden'>
                  <li>
                    <Link
                      href='/menu-siswa/absensi'
                      className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                        pathname === "/menu-siswa/absensi"
                          ? "bg-white/75 text-black"
                          : ""
                      }`}>
                      Absensi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/menu-siswa/nilai'
                      className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                        pathname === "/menu-siswa/nilai"
                          ? "bg-white/75 text-black"
                          : ""
                      }`}>
                      Nilai
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>

            <hr className='text-gray-500 my-2' />
            <li>
              <Link
                href='/pegawai'
                className={`flex gap-4 py-2 px-4 rounded-lg hover:bg-white/75 hover:text-black cursor-pointer ${
                  pathname === "/pegawai" ? "bg-white/75 text-black" : ""
                }`}>
                <CircleUser size={20} />
                <span>Pegawai</span>
              </Link>
            </li>
            <li>
              <Link
                href='/absensi-pegawai'
                className={`flex gap-4 py-2 px-4 rounded-lg hover:bg-white/75 hover:text-black cursor-pointer ${
                  pathname === "/absensi-pegawai"
                    ? "bg-white/75 text-black"
                    : ""
                }`}>
                <Grid2X2Plus size={20} />
                <span>Absensi Pegawai</span>
              </Link>
            </li>
            <hr className='text-gray-500 my-2' />
            <li className='flex gap-4 py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer'>
              <Banknote size={20} />
              <span>Transaksi Siswa</span>
            </li>
            <li className='flex justify-between gap-4 py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer'>
              <div className='flex gap-4 items-center'>
                <Wallet size={20} />
                <span>Tabungan Siswa</span>
              </div>
              <div>
                <ChevronRight size={20} />
              </div>
            </li>
            <li className='flex justify-between gap-4 py-2 px-4 rounded-lg hover:bg-blue-600 cursor-pointer'>
              <div className='flex gap-4 items-center'>
                <ShoppingCart size={20} />
                <span>Keuangan Umum</span>
              </div>
              <div>
                <ChevronRight size={20} />
              </div>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
