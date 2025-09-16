/** @format */

import { KelasEntity } from "@/domain/entities/kelas.entity";
import { pegawaiDummy } from "./pegawai.data";

export const kelasDummy: KelasEntity[] = [
  {
    id: 1,
    nama_kelas: "X A",
    wali_kelas: [pegawaiDummy[0]],
  },
  {
    id: 2,
    nama_kelas: "X B",
    wali_kelas: [pegawaiDummy[1]],
  },
  {
    id: 3,
    nama_kelas: "XI A",
    wali_kelas: [pegawaiDummy[2]],
  },
  {
    id: 4,
    nama_kelas: "XI B",
    wali_kelas: [pegawaiDummy[3]],
  },
  {
    id: 5,
    nama_kelas: "XII IPA",
    wali_kelas: [pegawaiDummy[4]],
  },
];
