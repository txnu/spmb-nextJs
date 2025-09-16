/** @format */

import { SPMBEntity } from "@/domain/entities/spmb.entity";
import { SPMBRepository } from "@/domain/repositories/spmb.repository";
import { spmb_data } from "../data/spmb.data";

export class DummySpmbRepository implements SPMBRepository {
  async getAllSPMB(): Promise<SPMBEntity[]> {
    return Promise.resolve(spmb_data);
  }
}
