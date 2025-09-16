/** @format */

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { KelasEntity } from "@/domain/entities/kelas.entity";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AbsensiEntity } from "@/domain/entities/absensi.entity";
import { SiswaEntity } from "@/domain/entities/siswa.entity";
import { PelajaranEntity } from "@/domain/entities/pelajaran.entity";

export const absensiColumns: ColumnDef<AbsensiEntity>[] = [
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
          ID Absensi
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
    cell: ({ row }) => {
      const siswa = row.getValue("siswa") as SiswaEntity[];
      return <div className=''>{siswa[0]?.nama_siswa}</div>;
    },
  },
  {
    accessorKey: "pelajaran",
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
    cell: ({ row }) => {
      const pelajaran = row.getValue("pelajaran") as PelajaranEntity[];
      return <div className=''>{pelajaran[0]?.mata_pelajaran}</div>;
    },
  },
  {
    accessorKey: "waktu",
    header: "Waktu",
    cell: ({ row }) => {
      const raw = row.getValue("waktu") as string;
      const date = new Date(raw);

      const formatted = date.toLocaleString("id-ID", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });

      return <div className='capitalize'>{formatted}</div>;
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
