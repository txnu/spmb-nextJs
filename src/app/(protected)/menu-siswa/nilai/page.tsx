/** @format */
"use client";

import { useNilai } from "@/presentation/hooks/useNilai";
import { nilaiColumns } from "@/presentation/layouts/table/columns/nilai.column";
import { DataTable } from "@/presentation/layouts/table/Table";

export default function NilaiPage() {
  const { nilai } = useNilai();
  return (
    <div className='flex overflow-auto w-full'>
      {" "}
      <DataTable
        columns={nilaiColumns}
        data={nilai}
        pageSize={12}
      />
    </div>
  );
}
