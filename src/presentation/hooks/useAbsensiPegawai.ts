/** @format */

import { AbsensiPegawaiUseCase } from "@/application/use-cases/absensi_pegawai.use-case";
import { AbsensiPegawaiEntity } from "@/domain/entities/absensi_pegawai.entity";
import { DummyAbsensiPegawaiRepository } from "@/infrastructure/dummy-data/repositories/absensi_pegawai.repository";
import { useEffect, useState } from "react";

const absensiPegawaiDummy = new DummyAbsensiPegawaiRepository();
const getAbsensiPegawaiUseCase = new AbsensiPegawaiUseCase(absensiPegawaiDummy);

export function useAbsensiPegawai() {
  const [absensiPegawai, setAbsensiPegawai] = useState<AbsensiPegawaiEntity[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    const fetchPegawai = async () => {
      try {
        const data = await getAbsensiPegawaiUseCase.execute();

        setAbsensiPegawai(data);
      } catch (error) {
        console.error("Kesalahan saat mendapatkan data", error);
        setError("Kesalahan saat mendapatkan data");
      } finally {
        setLoading(false);
      }
    };

    fetchPegawai();
  }, []);

  return {
    absensiPegawai,
    loading,
    error,
  };
}
