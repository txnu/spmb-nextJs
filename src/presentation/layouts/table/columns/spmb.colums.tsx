/** @format */

import { SPMBEntity } from "@/domain/entities/spmb.entity";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const spmbColumns: ColumnDef<SPMBEntity>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          ID
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='uppercase font-bold'>{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "nama_pendaftar",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Nama Pendaftar
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className=''>{row.getValue("nama_pendaftar")}</div>,
  },
  {
    accessorKey: "jenis_kelamin",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Jenis Kelamin
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='lowercase'>{row.getValue("jenis_kelamin")}</div>
    ),
  },
  {
    accessorKey: "nik_nisn",
    header: "NIK / NISN",
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue("nik_nisn")}</div>
    ),
  },
  {
    accessorKey: "asal_sekolah",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Asal Sekolah
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='uppercase'>{row.getValue("asal_sekolah")}</div>
    ),
  },
  {
    accessorKey: "ttl",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Tempat / tanggal lahir
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => <div className='lowercase'>{row.getValue("ttl")}</div>,
  },
  {
    accessorKey: "orang_tua",
    header: "Orang tua",
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue("orang_tua")}</div>
    ),
  },
  {
    accessorKey: "alamat",
    header: "Alamat",
    cell: ({ row }) => (
      <div className='capitalize overflow-hidden line-clamp-2'>
        {row.getValue("alamat")}
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;

      const statusClasses =
        status === "Pending"
          ? "bg-yellow-500 text-black"
          : "bg-green-500 text-white";
      return (
        <div
          className={`capitalize px-2 py-1 ${statusClasses} font-bold rounded-2xl text-center`}>
          {status}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const spmb = row.original;

      return (
        <div className='whitespace-nowrap'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                className='h-8 w-8 p-0'>
                <span className='sr-only'>Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(spmb.id)}>
                Salin ID SPMB
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Lihat detail</DropdownMenuItem>
              <DropdownMenuItem>Lihat detail pembayaran</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
