/** @format */

import { TagihanSiswaEntity } from "@/domain/entities/tagihan-siswa.entity";
import { TagihanSiswaRepository } from "@/domain/repositories/tagihan-siswa.entity";
import { tagihanSiswaDummy } from "../data/tagihan-siswa.data";

export class TagihanSiswaDummy implements TagihanSiswaRepository {
  async getAllTagihanSiswa(): Promise<TagihanSiswaEntity[]> {
    return Promise.resolve(tagihanSiswaDummy);
  }
}
