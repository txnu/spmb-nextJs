/** @format */

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TagihanSiswaEntity } from "@/domain/entities/tagihan-siswa.entity";

export const tagihanSiswaColumns: ColumnDef<TagihanSiswaEntity>[] = [
  {
    accessorKey: "kode_pembayaran",
    header: "Kode Pembayaran",
    cell: ({ row }) => (
      <div className='uppercase font-bold'>
        {row.getValue("kode_pembayaran")}
      </div>
    ),
  },
  {
    accessorKey: "siswa",
    accessorFn: (row) => row.siswa[0]?.nama_siswa ?? "",
    header: "Nama Siswa",
    cell: ({ getValue }) => {
      return <div className=''>{getValue<string>()}</div>;
    },
  },
  {
    accessorKey: "total_pembayaran",
    header: "Total Pembayaran",
    cell: ({ row }) => {
      return <div className=''>{row.getValue("total_pembayaran")}</div>;
    },
  },
  {
    accessorKey: "status_pembayaran",
    header: "Status Pembayaran",
    cell: ({ row }) => {
      return <div className=''>{row.getValue("status_pembayaran")}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const tagihanSiswa = row.original;

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
                onClick={() =>
                  navigator.clipboard.writeText(tagihanSiswa.kode_pembayaran)
                }>
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
