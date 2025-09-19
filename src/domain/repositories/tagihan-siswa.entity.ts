/** @format */

import { TagihanSiswaEntity } from "../entities/tagihan-siswa.entity";

export interface TagihanSiswaRepository {
  getAllTagihanSiswa(): Promise<TagihanSiswaEntity[]>;
}
