/** @format */
"use client";

import { Button } from "@/components/ui/button";
import { useNilai } from "@/presentation/hooks/useNilai";
import { nilaiColumns } from "@/presentation/layouts/table/columns/nilai.column";
import { DataTable } from "@/presentation/layouts/table/DataTable";
import { Printer } from "lucide-react";
import Link from "next/link";

export default function NilaiPage() {
  const { nilai } = useNilai();
  return (
    <div className='flex overflow-auto w-full'>
      {" "}
      <DataTable
        columns={nilaiColumns}
        data={nilai}
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
