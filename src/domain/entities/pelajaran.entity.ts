/** @format */

import { PegawaiEntity } from "./pegawai.entity";

export interface PelajaranEntity {
  id: string;
  mata_pelajaran: string;
  pukul: string;
  guru: PegawaiEntity[];
}
