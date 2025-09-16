/** @format */
"use client";

import { useAbsensi } from "@/presentation/hooks/useAbsensi";
import { absensiColumns } from "@/presentation/layouts/table/columns/absensi.column";
import { DataTable } from "@/presentation/layouts/table/Table";

/** @format */
export default function AbsensiPage() {
  const { absensi } = useAbsensi();
  return (
    <div className='flex overflow-auto w-full'>
      <DataTable
        columns={absensiColumns}
        data={absensi}
        pageSize={12}
      />
    </div>
  );
}
