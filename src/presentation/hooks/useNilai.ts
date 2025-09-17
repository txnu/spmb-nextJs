/** @format */

"use client";

import { NilaiUseCase } from "@/application/use-cases/nilai.use-case";
import { NilaiEntity } from "@/domain/entities/nilai.entity";
import { DummyNilaiRepository } from "@/infrastructure/dummy-data/repositories/nilai.repository";
import { useEffect, useState } from "react";

const NilaiRepository = new DummyNilaiRepository();
const getNilaiUsecase = new NilaiUseCase(NilaiRepository);

export function useNilai() {
  const [nilai, setNilai] = useState<NilaiEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchNilai = async () => {
      try {
        const data = await getNilaiUsecase.execute();

        setNilai(data);
      } catch (error) {
        console.error("Kesalahan saat mengambil data nilai", error);
        setError("Kesalahan saat mengambil data");
      } finally {
        setLoading(false);
      }
    };
    fetchNilai();
  }, []);
  return {
    nilai,
    loading,
    error,
  };
}
