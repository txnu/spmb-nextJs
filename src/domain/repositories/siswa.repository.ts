/** @format */

import { SiswaEntity } from "../entities/siswa.entity";

export interface SiswaRepository {
  getAllSiswa(): Promise<SiswaEntity[]>;
}
