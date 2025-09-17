/** @format */

import { KelasEntity } from "./kelas.entity";
import { PelajaranEntity } from "./pelajaran.entity";
import { SiswaEntity } from "./siswa.entity";

export interface NilaiEntity {
  id: string;
  siswa: SiswaEntity[];
  kelas: KelasEntity[];
  pelajaran: PelajaranEntity[];
  nilai: number;
}
