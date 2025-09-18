/** @format */

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
import { PegawaiEntity } from "@/domain/entities/pegawai.entity";

export const pegawaiColumns: ColumnDef<PegawaiEntity>[] = [
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
    accessorKey: "nip",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          NIP
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='uppercase font-bold'>{row.getValue("nip")}</div>
    ),
  },
  {
    accessorKey: "nama_pegawai",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='flex items-start justify-start px-0'>
          Nama Pegawai
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className=''>{row.getValue("nama_pegawai")}</div>;
    },
  },
  {
    accessorKey: "nilai",
    header: "Nilai",
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue("nilai")}</div>
    ),
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
    cell: ({ row }) => {
      return <div className=''>{row.getValue("jenis_kelamin")}</div>;
    },
  },
  {
    accessorKey: "no_hp",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Nomor Hp
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className=''>{row.getValue("no_hp")}</div>;
    },
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
    cell: ({ row }) => {
      return <div className=''>{row.getValue("ttl")}</div>;
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Status
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <div className=''>{row.getValue("status")}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const pegawai = row.original;

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
                onClick={() => navigator.clipboard.writeText(pegawai.nip)}>
                Salin ID Absensi
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Lihat detail</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
