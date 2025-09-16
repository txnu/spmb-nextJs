/** @format */

import { SPMBEntity } from "../entities/spmb.entity";

export interface SPMBRepository {
  getAllSPMB(): Promise<SPMBEntity[]>;
}
