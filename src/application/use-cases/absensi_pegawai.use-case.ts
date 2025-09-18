/** @format */

import { AbsensiPegawaiEntity } from "@/domain/entities/absensi_pegawai.entity";
import { AbsensiPegawaiRepository } from "@/domain/repositories/absensi_pegawai.repository";

export class AbsensiPegawaiUseCase {
  constructor(private absensiPegawaiRepository: AbsensiPegawaiRepository) {}

  async execute(): Promise<AbsensiPegawaiEntity[]> {
    return this.absensiPegawaiRepository.getAllAbsensiPegawai();
  }
}
