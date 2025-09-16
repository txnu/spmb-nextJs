/** @format */
"use client";

import { Button } from "@/components/ui/button";
import { useSiswa } from "@/presentation/hooks/useSiswa";
import { siswaColumns } from "@/presentation/layouts/table/columns/siswa.column";
import { DataTable } from "@/presentation/layouts/table/Table";
import Link from "next/link";

export default function SiswaPage() {
  const { siswa } = useSiswa();
  return (
    <div className='flex overflow-auto w-full'>
      {" "}
      <DataTable
        columns={siswaColumns}
        data={siswa}
        pageSize={12}
        rowIdKey='nik_nisn'
        headerAction={
          <>
            <Link href='/siswa/tambah'>
              <Button className='bg-blue-600 hover:bg-blue-700 cursor-pointer'>
                Tambah
              </Button>
            </Link>
          </>
        }
      />
    </div>
  );
}
