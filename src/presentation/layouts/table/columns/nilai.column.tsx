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
import { NilaiEntity } from "@/domain/entities/nilai.entity";

export const nilaiColumns: ColumnDef<NilaiEntity>[] = [
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
          ID Nilai
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className='uppercase font-bold'>{row.getValue("id")}</div>
    ),
  },
  {
    accessorKey: "siswa",
    accessorFn: (row) => row.siswa[0]?.nama_siswa ?? "",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className='flex items-start justify-start px-0'>
          Nama Siswa
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ getValue }) => {
      return <div className=''>{getValue<string>()}</div>;
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
    accessorKey: "kelas",
    accessorFn: (row) => row.kelas[0]?.nama_kelas ?? "",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Kelas
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ getValue }) => {
      return <div className=''>{getValue<string>()}</div>;
    },
  },
  {
    accessorKey: "pelajaran",
    accessorFn: (row) => row.pelajaran[0]?.mata_pelajaran ?? "",
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Pelajaran
          <ArrowUpDown />
        </Button>
      );
    },
    cell: ({ getValue }) => {
      return <div className=''>{getValue<string>()}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const absensi = row.original;

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
                onClick={() => navigator.clipboard.writeText(absensi.id)}>
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
