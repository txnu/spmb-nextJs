/** @format */

import { PelajaranEntity } from "@/domain/entities/pelajaran.entity";
import { pegawaiDummy } from "./pegawai.data";

export const pelajaranDummy: PelajaranEntity[] = [
  {
    id: "MP001",
    mata_pelajaran: "Matematika",
    guru: [pegawaiDummy[0]],
    pukul: "07:30 - 09:00",
  },
  {
    id: "MP002",
    mata_pelajaran: "Ilmu Pengetahuan Alam (IPA)",
    guru: [pegawaiDummy[1]],
    pukul: "09:15 - 10:45",
  },
  {
    id: "MP003",
    mata_pelajaran: "Bahasa Indonesia",
    guru: [pegawaiDummy[2]],
    pukul: "11:00 - 12:30",
  },
  {
    id: "MP004",
    mata_pelajaran: "Bahasa Inggris",
    guru: [pegawaiDummy[3]],
    pukul: "13:00 - 14:30",
  },
  {
    id: "MP005",
    mata_pelajaran: "Pendidikan Jasmani",
    guru: [pegawaiDummy[4]],
    pukul: "14:45 - 16:15",
  },
];
