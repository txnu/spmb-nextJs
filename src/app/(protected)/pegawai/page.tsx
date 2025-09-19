/** @format */
"use client";

import { Button } from "@/components/ui/button";
import { usePegawai } from "@/presentation/hooks/usePegawai";
import { pegawaiColumns } from "@/presentation/layouts/table/columns/pegawai.column";
import { DataTable } from "@/presentation/layouts/table/DataTable";
import { Printer } from "lucide-react";
import Link from "next/link";

export default function PegawaiPage() {
  const { pegawai } = usePegawai();
  return (
    <div className='flex overflow-auto w-full'>
      {" "}
      <DataTable
        columns={pegawaiColumns}
        data={pegawai}
        pageSize={12}
        rowIdKey='nip'
        headerAction={
          <>
            <Link href='/siswa/tambah'>
              <Button className='bg-blue-600 hover:bg-blue-700 cursor-pointer'>
                Tambah
              </Button>
            </Link>
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
