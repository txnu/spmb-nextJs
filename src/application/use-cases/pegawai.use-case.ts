/** @format */

import { PegawaiEntity } from "@/domain/entities/pegawai.entity";
import { PegawaiRepository } from "@/domain/repositories/pegawai.repository";

export class PegawaiUseCase {
  constructor(private pegawaiRepository: PegawaiRepository) {}

  async execute(): Promise<PegawaiEntity[]> {
    return await this.pegawaiRepository.getAllPegawai();
  }
}
