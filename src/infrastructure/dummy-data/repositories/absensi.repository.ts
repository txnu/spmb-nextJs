/** @format */

import { AbsensiEntity } from "@/domain/entities/absensi.entity";
import { AbsensiRepository } from "@/domain/repositories/absensi.repository";
import { dummyAbsensi } from "../data/absensi.data";

export class DummyAbsensiRepository implements AbsensiRepository {
  async getAllAbsensi(): Promise<AbsensiEntity[]> {
    return Promise.resolve(dummyAbsensi);
  }
}
