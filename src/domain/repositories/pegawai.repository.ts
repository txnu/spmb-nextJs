/** @format */

import { PegawaiEntity } from "../entities/pegawai.entity";

export interface PegawaiRepository {
  getAllPegawai(): Promise<PegawaiEntity[]>;
}
