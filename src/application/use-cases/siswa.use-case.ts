/** @format */

import { SiswaEntity } from "@/domain/entities/siswa.entity";
import { SiswaRepository } from "@/domain/repositories/siswa.repository";

export class SiswaUseCase {
  constructor(private siswaRepository: SiswaRepository) {}

  async execute(): Promise<SiswaEntity[]> {
    return await this.siswaRepository.getAllSiswa();
  }
}
