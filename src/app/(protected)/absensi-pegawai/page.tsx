/** @format */
"use client";

import { Button } from "@/components/ui/button";
import { useAbsensiPegawai } from "@/presentation/hooks/useAbsensiPegawai";
import { absensiPegawaiColumns } from "@/presentation/layouts/table/columns/absensi_pegawai.column";
import { DataTable } from "@/presentation/layouts/table/Table";
import { Printer } from "lucide-react";
import Link from "next/link";

export default function PegawaiPage() {
  const { absensiPegawai } = useAbsensiPegawai();
  return (
    <div className='flex overflow-auto w-full'>
      {" "}
      <DataTable
        columns={absensiPegawaiColumns}
        data={absensiPegawai}
        pageSize={12}
        rowIdKey='id'
        headerAction={
          <>
            <Link href='/siswa/tambah'>
              <Button className='bg-green-600 hover:bg-green-700 cursor-pointer'>
                <Printer
                  height={30}
                  width={30}
                />
              </Button>
            </Link>
          </>
        }
      />
    </div>
  );
}
