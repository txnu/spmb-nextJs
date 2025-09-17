/** @format */

import { NilaiEntity } from "@/domain/entities/nilai.entity";
import { NilaiRepository } from "@/domain/repositories/nilai.repository";
import { nilaiDummy } from "../data/nilai.data";

export class DummyNilaiRepository implements NilaiRepository {
  async getAllNilai(): Promise<NilaiEntity[]> {
    return Promise.resolve(nilaiDummy);
  }
}
