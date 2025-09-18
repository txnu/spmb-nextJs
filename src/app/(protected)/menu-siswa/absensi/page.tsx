/** @format */
"use client";

import { Button } from "@/components/ui/button";
import { useAbsensi } from "@/presentation/hooks/useAbsensi";
import { absensiColumns } from "@/presentation/layouts/table/columns/absensi.column";
import { DataTable } from "@/presentation/layouts/table/Table";
import { Printer } from "lucide-react";
import Link from "next/link";

/** @format */
export default function AbsensiPage() {
  const { absensi } = useAbsensi();
  return (
    <div className='flex overflow-auto w-full'>
      <DataTable
        columns={absensiColumns}
        data={absensi}
        pageSize={12}
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
