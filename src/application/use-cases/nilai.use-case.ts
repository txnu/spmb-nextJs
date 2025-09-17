/** @format */

import { NilaiEntity } from "@/domain/entities/nilai.entity";
import { NilaiRepository } from "@/domain/repositories/nilai.repository";

export class NilaiUseCase {
  constructor(private nilaiRepository: NilaiRepository) {}

  async execute(): Promise<NilaiEntity[]> {
    return await this.nilaiRepository.getAllNilai();
  }
}
