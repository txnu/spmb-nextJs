/** @format */

import { PegawaiEntity } from "./pegawai.entity";

export enum StatusAbsen {
  HADIR = "Hadir",
  TERLAMBAT = "Terlambat",
  PULANG_CEPAT = "Pulang Cepat",
  TIDAK_HADIR = "Tidak Hadir",
  IZIN = "Izin",
  SAKIT = "Sakit",
  CUTI = "Cuti",
}

export interface AbsensiPegawaiEntity {
  id: string;
  pegawai: PegawaiEntity[];
  tanggal: Date;
  waktu_masuk: Date | null;
  waktu_keluar: Date | null;
  status_absen: StatusAbsen;

  keterlambatan: number;
  lembur: number;
  durasi_kerja?: number;

  approved_by?: string | "";
  approved_status?: "Menunggu" | "Diterima" | "Ditolak" | null;
  approved_date?: Date | null;
}
