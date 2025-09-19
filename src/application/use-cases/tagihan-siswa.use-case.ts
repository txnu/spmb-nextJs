/** @format */

import { TagihanSiswaEntity } from "@/domain/entities/tagihan-siswa.entity";
import { TagihanSiswaRepository } from "@/domain/repositories/tagihan-siswa.entity";

export class GetAllTagihanSiswaUseCase {
  constructor(private tagihanSiswaRepository: TagihanSiswaRepository) {}

  async execute(): Promise<TagihanSiswaEntity[]> {
    return await this.tagihanSiswaRepository.getAllTagihanSiswa();
  }
}
