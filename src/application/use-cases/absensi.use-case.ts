/** @format */

import { AbsensiEntity } from "@/domain/entities/absensi.entity";
import { AbsensiRepository } from "@/domain/repositories/absensi.repository";

export class AbsensiUseCase {
  constructor(private absensiRepository: AbsensiRepository) {}

  async execute(): Promise<AbsensiEntity[]> {
    return this.absensiRepository.getAllAbsensi();
  }
}
