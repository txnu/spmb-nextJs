/** @format */
"use client";

import { AbsensiUseCase } from "@/application/use-cases/absensi.use-case";
import { AbsensiEntity } from "@/domain/entities/absensi.entity";
import { DummyAbsensiRepository } from "@/infrastructure/dummy-data/repositories/absensi.repository";
import { useEffect, useState } from "react";

const AbsensiRepository = new DummyAbsensiRepository();
const getAllAbsensiUseCase = new AbsensiUseCase(AbsensiRepository);

export function useAbsensi() {
  const [absensi, setAbsensi] = useState<AbsensiEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchAbsensi = async () => {
      try {
        const data = await getAllAbsensiUseCase.execute();
        if (!data) {
          setError("Data tidak ditemukan");
        }
        setAbsensi(data);
        console.log(data);
      } catch (error) {
        console.error("Kesalahan pada saat mengambil data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAbsensi();
  }, []);
  return {
    absensi,
    loading,
    error,
  };
}
