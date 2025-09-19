/** @format */

import { GetAllTagihanSiswaUseCase } from "@/application/use-cases/tagihan-siswa.use-case";
import { TagihanSiswaEntity } from "@/domain/entities/tagihan-siswa.entity";
import { TagihanSiswaDummy } from "@/infrastructure/dummy-data/repositories/tagihan-siswa.repository";
import { useEffect, useState } from "react";

const tagihanSiswaDummy = new TagihanSiswaDummy();
const tagihanSiswaUseCase = new GetAllTagihanSiswaUseCase(tagihanSiswaDummy);

export function useTagihanSiswa() {
  const [tagihanSiswa, setTagihanSiswa] = useState<TagihanSiswaEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    const fetchTagihanSiswa = async () => {
      try {
        const data = await tagihanSiswaUseCase.execute();

        setTagihanSiswa(data);
      } catch (error) {
        console.error("Kesalahan saat mengambil data", error);
        setError("Kesalahan pada server");
      } finally {
        setLoading(false);
      }
    };

    fetchTagihanSiswa();
  }, []);
  return {
    tagihanSiswa,
    loading,
    error,
  };
}
