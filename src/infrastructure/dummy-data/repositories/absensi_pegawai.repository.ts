/** @format */

import { AbsensiPegawaiEntity } from "@/domain/entities/absensi_pegawai.entity";
import { AbsensiPegawaiRepository } from "@/domain/repositories/absensi_pegawai.repository";
import { dummyAbsensiPegawai } from "../data/absensi_pegawai.data";

export class DummyAbsensiPegawaiRepository implements AbsensiPegawaiRepository {
  async getAllAbsensiPegawai(): Promise<AbsensiPegawaiEntity[]> {
    return Promise.resolve(dummyAbsensiPegawai);
  }
}
