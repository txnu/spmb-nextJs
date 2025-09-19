/** @format */
"use client";

import {
  Banknote,
  BanknoteIcon,
  BookCopy,
  BookMarked,
  ChevronLeft,
  ChevronRight,
  CircleUser,
  DoorOpen,
  FileText,
  Gauge,
  HandCoins,
  IdCard,
  LayoutList,
  Megaphone,
  MessageCircle,
  ScrollText,
  ShoppingCart,
  SquareLibrary,
  Users,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebar } from "@/components/context/sidebarContext";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

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
        className={`fixed md:static z-60 px-4 py-3 w-72 shrink-0 top-0 bg-blue-800 h-screen transform overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 md:translate-x-0`}>
        <div className='overflow-y-auto '>
          {" "}
          <div className='flex flex-row justify-between items-center py-2 md:py-4 px-4 gap-4'>
            <div>
              <Image
                src='/images/image.png'
                width={100}
                height={50}
                alt='logo'
              />
            </div>
            <div
              className='flex justify-end items-center p-2 border rounded-lg md:hidden'
              onClick={close}>
              <ChevronLeft
                size={20}
                className=' text-white'
              />
            </div>
          </div>
          <nav className='w-full h-full px-2 mx-auto my-2 transition-all duration-300'>
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

              {/* MENU */}
              <h5 className='text-xs font-bold uppercase opacity-50'>MENU</h5>

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
                    pathname.startsWith("/siswa")
                      ? "bg-white/75 text-black"
                      : ""
                  }`}>
                  <Users size={20} />
                  <span>Siswa</span>
                </Link>
              </li>
              <li
                className={`flex items-center text-sm justify-between gap-2 py-2 px-4 rounded-md hover:bg-white/75 hover:text-black cursor-pointer ${
                  pathname.startsWith("/menu-siswa")
                    ? "bg-white/75 text-black"
                    : ""
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

              {/* PEGAWAI */}
              <h5 className='text-xs font-bold uppercase opacity-50'>
                PEGAWAI
              </h5>
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
              <li
                className={`flex items-center text-sm justify-between gap-2 py-2 px-4 rounded-md hover:bg-white/75 hover:text-black cursor-pointer ${
                  pathname.includes("/menu-pegawai")
                    ? "bg-white/75 text-black"
                    : ""
                }`}
                onClick={() => toggleDropdown("menu_pegawai")}>
                <div className='flex gap-4 items-center'>
                  <LayoutList size={20} />
                  <span>Menu Pegawai</span>
                </div>
                <motion.div
                  animate={{ rotate: openDropdown === "menu_pegawai" ? 90 : 0 }}
                  transition={{ duration: 0.3 }}>
                  <ChevronRight size={20} />
                </motion.div>
              </li>
              <AnimatePresence>
                {openDropdown === "menu_pegawai" && (
                  <motion.ul
                    initial={{ height: 0, y: -10 }}
                    animate={{ height: "auto", y: 0 }}
                    exit={{ height: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className='pl-10 flex flex-col gap-2 text-gray-200 overflow-hidden'>
                    <li>
                      <Link
                        href='/menu-pegawai/absensi'
                        className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                          pathname === "/menu-pegawai/absensi"
                            ? "bg-white/75 text-black"
                            : ""
                        }`}>
                        Absensi
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/menu-pegawai/jadwal'
                        className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                          pathname === "/menu-pegawai/jadwal"
                            ? "bg-white/75 text-black"
                            : ""
                        }`}>
                        Jadwal
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>

              <hr className='text-gray-500 my-2' />

              {/* KEUANGAN */}
              <h5 className='text-xs font-bold uppercase opacity-50'>
                Keuangan
              </h5>
              <li
                className={`flex items-center text-sm justify-between gap-2 py-2 px-4 rounded-md hover:bg-white/75 hover:text-black cursor-pointer ${
                  pathname.startsWith("/spp-pembarayan")
                    ? "bg-white/75 text-black"
                    : ""
                }`}
                onClick={() => toggleDropdown("spp-pembayaran")}>
                <div className='flex gap-4 items-center'>
                  <HandCoins size={20} />
                  <span>SPP dan Pembayaran</span>
                </div>
                <motion.div
                  animate={{
                    rotate: openDropdown === "spp-pembayaran" ? 90 : 0,
                  }}
                  transition={{ duration: 0.3 }}>
                  <ChevronRight size={20} />
                </motion.div>
              </li>
              <AnimatePresence>
                {openDropdown === "spp-pembayaran" && (
                  <motion.ul
                    initial={{ height: 0, y: -10 }}
                    animate={{ height: "auto", y: 0 }}
                    exit={{ height: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className='pl-10 flex flex-col gap-2 text-gray-200 overflow-hidden'>
                    <li>
                      <Link
                        href='/spp-pembayaran/tagihan-siswa'
                        className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                          pathname === "/spp-pembayaran/tagihan-siswa"
                            ? "bg-white/75 text-black"
                            : ""
                        }`}>
                        Tagihan siswa
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/spp-pembayaran/riwayat-pembayaran'
                        className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                          pathname === "/spp-pembayaran/riwayat-pembayaran"
                            ? "bg-white/75 text-black"
                            : ""
                        }`}>
                        Riwayat Pembayaran
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/spp-pembayaran/tunggakan'
                        className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                          pathname === "/spp-pembayaran/tunggakan"
                            ? "bg-white/75 text-black"
                            : ""
                        }`}>
                        Tunggakan
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
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
              <li>
                <Link
                  href='/penggajian'
                  className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-white/75 hover:text-black cursor-pointer ${
                    pathname.startsWith("/penggajian")
                      ? "bg-white/75 text-black"
                      : ""
                  }`}>
                  <Banknote size={20} />
                  <span>Penggajian</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/kas-sekolah'
                  className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-white/75 hover:text-black cursor-pointer ${
                    pathname.startsWith("/kas-sekolah")
                      ? "bg-white/75 text-black"
                      : ""
                  }`}>
                  <BanknoteIcon size={20} />
                  <span>Kas Sekolah</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/laporan-keuangan'
                  className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-white/75 hover:text-black cursor-pointer ${
                    pathname.startsWith("/laporan-keuangan")
                      ? "bg-white/75 text-black"
                      : ""
                  }`}>
                  <FileText size={20} />
                  <span>Laporan Keuangan</span>
                </Link>
              </li>

              <hr className='text-gray-500 my-2' />

              {/* SARANA & PRASARANA */}
              <h5 className='text-xs font-bold uppercase opacity-50'>
                Sarana & Prasarana
              </h5>
              <li
                className={`flex items-center text-sm justify-between gap-2 py-2 px-4 rounded-md hover:bg-white/75 hover:text-black cursor-pointer ${
                  pathname.startsWith("/inventaris")
                    ? "bg-white/75 text-black"
                    : ""
                }`}
                onClick={() => toggleDropdown("inventaris")}>
                <div className='flex gap-4 items-center'>
                  <LayoutList size={20} />
                  <span>Inventaris</span>
                </div>
                <motion.div
                  animate={{
                    rotate: openDropdown === "inventaris" ? 90 : 0,
                  }}
                  transition={{ duration: 0.3 }}>
                  <ChevronRight size={20} />
                </motion.div>
              </li>
              <AnimatePresence>
                {openDropdown === "inventaris" && (
                  <motion.ul
                    initial={{ height: 0, y: -10 }}
                    animate={{ height: "auto", y: 0 }}
                    exit={{ height: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className='pl-10 flex flex-col gap-2 text-gray-200 overflow-hidden'>
                    <li>
                      <Link
                        href='/inventaris/aset-sekolah'
                        className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                          pathname === "/inventaris/tagihan-siswa"
                            ? "bg-white/75 text-black"
                            : ""
                        }`}>
                        Aset Sekolah
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/inventaris/kondisi-barang'
                        className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                          pathname === "/inventaris/kondisi-barang"
                            ? "bg-white/75 text-black"
                            : ""
                        }`}>
                        Kondisi Barang
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/inventaris/maintenance'
                        className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                          pathname === "/inventaris/maintenance"
                            ? "bg-white/75 text-black"
                            : ""
                        }`}>
                        Tunggakan
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
              <li>
                <Link
                  href='/ruangan'
                  className={`flex gap-4 py-2 px-4 rounded-lg hover:bg-white/75 hover:text-black cursor-pointer ${
                    pathname === "/ruangan" ? "bg-white/75 text-black" : ""
                  }`}>
                  <DoorOpen size={20} />
                  <span>Ruangan</span>
                </Link>
              </li>
              <li
                className={`flex items-center text-sm justify-between gap-2 py-2 px-4 rounded-md hover:bg-white/75 hover:text-black cursor-pointer ${
                  pathname.includes("/perpustakaan")
                    ? "bg-white/75 text-black"
                    : ""
                }`}
                onClick={() => toggleDropdown("perpustakaan")}>
                <div className='flex gap-4 items-center'>
                  <BookCopy size={20} />
                  <span>Perpustakaan</span>
                </div>
                <motion.div
                  animate={{ rotate: openDropdown === "perpustakaan" ? 90 : 0 }}
                  transition={{ duration: 0.3 }}>
                  <ChevronRight size={20} />
                </motion.div>
              </li>
              <AnimatePresence>
                {openDropdown === "perpustakaan" && (
                  <motion.ul
                    initial={{ height: 0, y: -10 }}
                    animate={{ height: "auto", y: 0 }}
                    exit={{ height: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className='pl-10 flex flex-col gap-2 text-gray-200 overflow-hidden'>
                    <li>
                      <Link
                        href='/perpustakaan/katalog-buku'
                        className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                          pathname === "/perpustakaan/katalog-buku"
                            ? "bg-white/75 text-black"
                            : ""
                        }`}>
                        Katalog Buku
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/perpustakaan/peminjaman'
                        className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                          pathname === "/perpustakaan/peminjaman"
                            ? "bg-white/75 text-black"
                            : ""
                        }`}>
                        Peminjaman
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/perpustakaan/denda'
                        className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                          pathname === "/perpustakaan/denda"
                            ? "bg-white/75 text-black"
                            : ""
                        }`}>
                        Denda
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>

              <hr className='text-gray-500 my-2' />

              {/* KOMUNIKASI*/}
              <h5 className='text-xs font-bold uppercase opacity-50'>
                Komunikasi
              </h5>
              <li>
                <Link
                  href='/pengumuman'
                  className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-white/75 hover:text-black cursor-pointer ${
                    pathname.startsWith("/pengumuman")
                      ? "bg-white/75 text-black"
                      : ""
                  }`}>
                  <Megaphone size={20} />
                  <span>Pengumuman</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/pesan'
                  className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-white/75 hover:text-black cursor-pointer ${
                    pathname.startsWith("/pesan")
                      ? "bg-white/75 text-black"
                      : ""
                  }`}>
                  <MessageCircle size={20} />
                  <span>Pesan / Notifikasi</span>
                </Link>
              </li>

              <hr className='text-gray-500 my-2' />

              {/* LAPORAN */}
              <h5 className='text-xs font-bold uppercase opacity-50'>
                LAPORAN
              </h5>
              <li
                className={`flex items-center text-sm justify-between gap-2 py-2 px-4 rounded-md hover:bg-white/75 hover:text-black cursor-pointer ${
                  pathname.startsWith("/laporan-siswa")
                    ? "bg-white/75 text-black"
                    : ""
                }`}
                onClick={() => toggleDropdown("laporan-siswa")}>
                <div className='flex gap-4 items-center'>
                  <BookMarked size={20} />
                  <span>Laporan Siswa</span>
                </div>
                <motion.div
                  animate={{
                    rotate: openDropdown === "laporan-siswa" ? 90 : 0,
                  }}
                  transition={{ duration: 0.3 }}>
                  <ChevronRight size={20} />
                </motion.div>
              </li>
              <AnimatePresence>
                {openDropdown === "laporan-siswa" && (
                  <motion.ul
                    initial={{ height: 0, y: -10 }}
                    animate={{ height: "auto", y: 0 }}
                    exit={{ height: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className='pl-10 flex flex-col gap-2 text-gray-200 overflow-hidden'>
                    <li>
                      <Link
                        href='/laporan-siswa/data-statistik'
                        className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                          pathname === "/laporan-siswa/data-statistik"
                            ? "bg-white/75 text-black"
                            : ""
                        }`}>
                        Data Statistik
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/laporan-siswa/rekap-kehadiran'
                        className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                          pathname === "/laporan-siswa/rekap-kehadiran"
                            ? "bg-white/75 text-black"
                            : ""
                        }`}>
                        Rekap Kehadiran
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/laporan-siswa/prestasi-akademik'
                        className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                          pathname === "/laporan-siswa/prestasi-akademik"
                            ? "bg-white/75 text-black"
                            : ""
                        }`}>
                        Prestasi Akademik
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
              <li
                className={`flex items-center text-sm justify-between gap-2 py-2 px-4 rounded-md hover:bg-white/75 hover:text-black cursor-pointer ${
                  pathname.startsWith("/laporan-pegawai")
                    ? "bg-white/75 text-black"
                    : ""
                }`}
                onClick={() => toggleDropdown("laporan-pegawai")}>
                <div className='flex gap-4 items-center'>
                  <ScrollText size={20} />
                  <span>Laporan Pegawai</span>
                </div>
                <motion.div
                  animate={{
                    rotate: openDropdown === "laporan-pegawai" ? 90 : 0,
                  }}
                  transition={{ duration: 0.3 }}>
                  <ChevronRight size={20} />
                </motion.div>
              </li>
              <AnimatePresence>
                {openDropdown === "laporan-pegawai" && (
                  <motion.ul
                    initial={{ height: 0, y: -10 }}
                    animate={{ height: "auto", y: 0 }}
                    exit={{ height: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className='pl-10 flex flex-col gap-2 text-gray-200 overflow-hidden'>
                    <li>
                      <Link
                        href='/laporan-pegawai/kinerja'
                        className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                          pathname === "/laporan-pegawai/kinerja"
                            ? "bg-white/75 text-black"
                            : ""
                        }`}>
                        Kinerja
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/laporan-pegawai/rekap-kehadiran'
                        className={`block py-2 hover:bg-white/75 hover:text-black px-3 rounded-md ${
                          pathname === "/laporan-pegawai/rekap-kehadiran"
                            ? "bg-white/75 text-black"
                            : ""
                        }`}>
                        Rekap Kehadiran
                      </Link>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
              <li>
                <Link
                  href='/laporan-keuangan'
                  className={`flex gap-4 py-2 px-4 rounded-lg hover:bg-white/75 hover:text-black cursor-pointer ${
                    pathname === "/laporan-keuangan"
                      ? "bg-white/75 text-black"
                      : ""
                  }`}>
                  <Banknote size={20} />
                  <span>Laporan Keuangan</span>
                </Link>
              </li>
              <li>
                <Link
                  href='/laporan-akademik'
                  className={`flex gap-4 py-2 px-4 rounded-lg hover:bg-white/75 hover:text-black cursor-pointer ${
                    pathname === "/laporan-akademik"
                      ? "bg-white/75 text-black"
                      : ""
                  }`}>
                  <SquareLibrary size={20} />
                  <span>Laporan Akademik</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
