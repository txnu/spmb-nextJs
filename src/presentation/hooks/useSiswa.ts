/** @format */
"use client";

import { SiswaUseCase } from "@/application/use-cases/siswa.use-case";
import { SiswaEntity } from "@/domain/entities/siswa.entity";
import { DummySiswaRepository } from "@/infrastructure/dummy-data/repositories/siswa.repository";
import { useEffect, useState } from "react";

const siswaRepository = new DummySiswaRepository();
const getAllSiswaUseCases = new SiswaUseCase(siswaRepository);

export function useSiswa() {
  const [siswa, setSiswa] = useState<SiswaEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchSiswa = async () => {
      try {
        const data = await getAllSiswaUseCases.execute();

        setSiswa(data);
        console.log(data);
      } catch (error) {
        console.error("Kesalahan saat mengambil data:", error);
        setError("Kesalahan saat ,mengambil data");
      } finally {
        setLoading(false);
      }
    };

    fetchSiswa();
  }, []);

  return {
    siswa,
    loading,
    error,
  };
}
