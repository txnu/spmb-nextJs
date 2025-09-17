/** @format */

import { NilaiEntity } from "../entities/nilai.entity";

export interface NilaiRepository {
  getAllNilai(): Promise<NilaiEntity[]>;
}
