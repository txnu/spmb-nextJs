/** @format */
"use client";

import { useSPMB } from "@/presentation/hooks/useSPMB";
import { spmbColumns } from "@/presentation/layouts/table/columns/spmb.colums";
import { DataTable } from "@/presentation/layouts/table/Table";

export default function SPMB() {
  const { spmbData } = useSPMB();
  return (
    <div className='flex overflow-auto'>
      <DataTable
        columns={spmbColumns}
        data={spmbData}
        pageSize={12}
      />
    </div>
  );
}
