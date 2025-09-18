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
import { AbsensiPegawaiEntity } from "@/domain/entities/absensi_pegawai.entity";

export const absensiPegawaiColumns: ColumnDef<AbsensiPegawaiEntity>[] = [
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
    accessorKey: "pegawai",
    accessorFn: (row) => row.pegawai[0]?.nama_pegawai ?? "",
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
    cell: ({ getValue }) => {
      return <div className=''>{getValue<string>()}</div>;
    },
  },
  {
    accessorKey: "tanggal",
    header: "Tanggal",
    cell: ({ row }) => {
      const raw = row.getValue("tanggal") as string;
      const date = new Date(raw);

      const formatted = date.toLocaleString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });

      return <div className='capitalize'>{formatted}</div>;
    },
  },
  {
    accessorKey: "waktu_masuk",
    header: "Waktu Masuk",
    cell: ({ row }) => {
      const raw = row.getValue("waktu_masuk") as string;
      const date = new Date(raw);

      const formatted = date.toLocaleString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      return <div className='capitalize'>{formatted}</div>;
    },
  },
  {
    accessorKey: "waktu_keluar",
    header: "Waktu Keluar",
    cell: ({ row }) => {
      const raw = row.getValue("waktu_keluar") as string;
      const date = new Date(raw);

      const formatted = date.toLocaleString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      return <div className='capitalize'>{formatted}</div>;
    },
  },
  {
    accessorKey: "status_absen",
    header: "Status absen",
    accessorFn: (row) => row.status_absen ?? "",
    cell: ({ getValue }) => {
      return <div className=''>{getValue<string>()}</div>;
    },
  },
  {
    accessorKey: "keterlambatan",
    header: "Keterlambatan",
    accessorFn: (row) => row.keterlambatan ?? "",
    cell: ({ getValue }) => {
      return <div className=''>{getValue<string>()}</div>;
    },
  },
  {
    accessorKey: "lembur",
    header: "Lembur",
    accessorFn: (row) => row.lembur ?? "",
    cell: ({ getValue }) => {
      return <div className=''>{getValue<string>()}</div>;
    },
  },
  {
    accessorKey: "durasi_kerja",
    header: "Durasi kerja",
    accessorFn: (row) => row.durasi_kerja ?? "",
    cell: ({ getValue }) => {
      return <div className=''>{getValue<string>()}</div>;
    },
  },
  {
    accessorKey: "approved_by",
    header: "Disetujui oleh",
    accessorFn: (row) => row.approved_by ?? "",
    cell: ({ getValue }) => {
      return <div className=''>{getValue<string>()}</div>;
    },
  },
  {
    accessorKey: "approved_status",
    header: "Status persetujuan",
    accessorFn: (row) => row.approved_status ?? "",
    cell: ({ getValue }) => {
      return <div className=''>{getValue<string>()}</div>;
    },
  },
  {
    accessorKey: "approved_date",
    header: "Tanggal persetujuan",
    cell: ({ row }) => {
      const raw = row.getValue("approved_date") as string;
      const date = new Date(raw);

      const formatted = date.toLocaleString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
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
