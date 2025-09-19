/** @format */
"use client";

import { useTagihanSiswa } from "@/presentation/hooks/useTagihanSiswa";
import { tagihanSiswaColumns } from "@/presentation/layouts/table/columns/tagihan-siswa.column";
import { TableStatic } from "@/presentation/layouts/table/TableStatic";

export default function TagihanSiswaPage() {
  const { tagihanSiswa } = useTagihanSiswa();
  return (
    <div className='flex overflow-auto'>
      <TableStatic
        columns={tagihanSiswaColumns}
        data={tagihanSiswa}
        rowIdKey='kode_pembayaran'
        pageSize={12}
      />
    </div>
  );
}
