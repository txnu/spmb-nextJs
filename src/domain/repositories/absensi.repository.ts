/** @format */

import { AbsensiEntity } from "../entities/absensi.entity";

export interface AbsensiRepository {
  getAllAbsensi(): Promise<AbsensiEntity[]>;
}
