/** @format */

import { PegawaiEntity } from "@/domain/entities/pegawai.entity";
import { PegawaiRepository } from "@/domain/repositories/pegawai.repository";
import { pegawaiDummy } from "../data/pegawai.data";

export class DummyPegawaiRepository implements PegawaiRepository {
  async getAllPegawai(): Promise<PegawaiEntity[]> {
    return await Promise.resolve(pegawaiDummy);
  }
}
