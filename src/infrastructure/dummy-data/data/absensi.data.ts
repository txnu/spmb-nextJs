/** @format */

import { AbsensiEntity } from "@/domain/entities/absensi.entity";
import { siswaDummy } from "./siswa.data";
import { pelajaranDummy } from "./pelajaran.data";

export const dummyAbsensi: AbsensiEntity[] = [
  {
    id: "ABS0001",
    siswa: [siswaDummy[0]],
    pelajaran: [pelajaranDummy[0]],
    waktu: new Date("2025-09-16T07:35:00.000Z"),
  },
  {
    id: "ABS0002",
    siswa: [siswaDummy[1]],
    pelajaran: [pelajaranDummy[1]],
    waktu: new Date("2025-09-16T09:20:00.000Z"),
  },
  {
    id: "ABS0003",
    siswa: [siswaDummy[2]],
    pelajaran: [pelajaranDummy[2]],
    waktu: new Date("2025-09-16T11:15:00.000Z"),
  },
  {
    id: "ABS0004",
    siswa: [siswaDummy[3]],
    pelajaran: [pelajaranDummy[3]],
    waktu: new Date("2025-09-16T13:05:00.000Z"),
  },
  {
    id: "ABS0005",
    siswa: [siswaDummy[4]],
    pelajaran: [pelajaranDummy[4]],
    waktu: new Date("2025-09-16T14:50:00.000Z"),
  },
];
