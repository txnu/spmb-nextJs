/** @format */

import { KelasEntity } from "./kelas.entity";

export interface SiswaEntity {
  nik_nisn: string;
  email: string;
  nama_siswa: string;
  jenis_kelamin: "Laki-laki" | "Perempuan" | undefined;
  ttl: string;
  alamat: string;
  no_hp: string;
  kelas: KelasEntity[];
  orang_tua: string;
  status: "Aktif" | "Lulus";
}
