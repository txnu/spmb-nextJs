/** @format */

import { PegawaiEntity } from "./pegawai.entity";

export interface KelasEntity {
  id: number;
  nama_kelas: string;
  wali_kelas: PegawaiEntity[];
}
