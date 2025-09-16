/** @format */

import { SPMBEntity } from "@/domain/entities/spmb.entity";
import { SPMBRepository } from "@/domain/repositories/spmb.repository";

export class GetAllSPMBUseCase {
  constructor(private spmbRepository: SPMBRepository) {}

  async execute(): Promise<SPMBEntity[]> {
    return await this.spmbRepository.getAllSPMB();
  }
}
