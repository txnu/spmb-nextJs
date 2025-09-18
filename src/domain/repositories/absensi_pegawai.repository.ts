/** @format */

import { AbsensiPegawaiEntity } from "../entities/absensi_pegawai.entity";

export interface AbsensiPegawaiRepository {
  getAllAbsensiPegawai(): Promise<AbsensiPegawaiEntity[]>;
}
