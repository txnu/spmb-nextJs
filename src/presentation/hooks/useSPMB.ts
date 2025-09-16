/** @format */

import { GetAllSPMBUseCase } from "@/application/use-cases/spmb.use-case";
import { SPMBEntity } from "@/domain/entities/spmb.entity";
import { DummySpmbRepository } from "@/infrastructure/dummy-data/repositories/spmb.repository";
import { useEffect, useState } from "react";

const spmbRepository = new DummySpmbRepository();
const getAllSPMBUseCase = new GetAllSPMBUseCase(spmbRepository);

export function useSPMB() {
  const [spmbData, setSpmbData] = useState<SPMBEntity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");

    const fetchSPMB = async () => {
      try {
        const data = await getAllSPMBUseCase.execute();

        setSpmbData(data);
        console.log("data:", data);
      } catch (error) {
        console.error("Kesalahan Saat Mengambil data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSPMB();
  }, []);

  return {
    spmbData,
    loading,
    error,
  };
}
