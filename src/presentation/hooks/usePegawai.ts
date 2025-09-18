/** @format */

import { PegawaiUseCase } from "@/application/use-cases/pegawai.use-case";
import { PegawaiEntity } from "@/domain/entities/pegawai.entity";
import { DummyPegawaiRepository } from "@/infrastructure/dummy-data/repositories/pegawai.repository";
import { loadavg } from "os";
import { useEffect, useState } from "react";
import { da } from "zod/v4/locales";

const pegawaiDummy = new DummyPegawaiRepository();
const getPegawaiUseCase = new PegawaiUseCase(pegawaiDummy);

export function usePegawai() {
  const [pegawai, setPegawai] = useState<PegawaiEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    const fetchPegawai = async () => {
      try {
        const data = await getPegawaiUseCase.execute();

        setPegawai(data);
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
    pegawai,
    loading,
    error,
  };
}
