/** @format */

import { PelajaranEntity } from "./pelajaran.entity";
import { SiswaEntity } from "./siswa.entity";

export interface AbsensiEntity {
  id: string;
  siswa: SiswaEntity[];
  pelajaran: PelajaranEntity[];
  waktu: Date;
}
