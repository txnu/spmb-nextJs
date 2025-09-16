/** @format */

import { SiswaEntity } from "@/domain/entities/siswa.entity";
import { SiswaRepository } from "@/domain/repositories/siswa.repository";
import { siswaDummy } from "../data/siswa.data";

export class DummySiswaRepository implements SiswaRepository {
  async getAllSiswa(): Promise<SiswaEntity[]> {
    return Promise.resolve(siswaDummy);
  }
}
