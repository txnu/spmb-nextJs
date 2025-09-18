/** @format */

import { AbsensiPegawaiEntity } from "@/domain/entities/absensi_pegawai.entity";
import { pegawaiDummy } from "./pegawai.data";

export enum StatusAbsen {
  HADIR = "Hadir",
  TERLAMBAT = "Terlambat",
  PULANG_CEPAT = "Pulang Cepat",
  TIDAK_HADIR = "Tidak Hadir",
  IZIN = "Izin",
  SAKIT = "Sakit",
  CUTI = "Cuti",
}

export const dummyAbsensiPegawai: AbsensiPegawaiEntity[] = [
  {
    id: "abs-001",
    pegawai: [pegawaiDummy[0]], // PG001 - Yanto
    tanggal: new Date("2024-09-16"),
    waktu_masuk: new Date("2024-09-16T08:00:00"),
    waktu_keluar: new Date("2024-09-16T17:00:00"),
    status_absen: StatusAbsen.HADIR,
    keterlambatan: 0,
    lembur: 0,
    durasi_kerja: 540, // 9 jam = 540 menit
  },
  {
    id: "abs-002",
    pegawai: [pegawaiDummy[1]], // PG002 - Yanti
    tanggal: new Date("2024-09-16"),
    waktu_masuk: new Date("2024-09-16T08:30:00"),
    waktu_keluar: new Date("2024-09-16T17:15:00"),
    status_absen: StatusAbsen.TERLAMBAT,
    keterlambatan: 30,
    lembur: 15,
    durasi_kerja: 525,
  },
  {
    id: "abs-003",
    pegawai: [pegawaiDummy[2]], // PG003 - Budi Santoso
    tanggal: new Date("2024-09-16"),
    waktu_masuk: new Date("2024-09-16T08:00:00"),
    waktu_keluar: new Date("2024-09-16T16:30:00"),
    status_absen: StatusAbsen.PULANG_CEPAT,
    keterlambatan: 0,
    lembur: 0,
    durasi_kerja: 510,
  },
  {
    id: "abs-004",
    pegawai: [pegawaiDummy[3]], // PG004 - Dewi Lestari
    tanggal: new Date("2024-09-16"),
    waktu_masuk: null,
    waktu_keluar: null,
    status_absen: StatusAbsen.SAKIT,
    keterlambatan: 0,
    lembur: 0,
    approved_by: "MGR001",
    approved_status: "Diterima",
    approved_date: new Date("2024-09-15T10:30:00"),
  },
  {
    id: "abs-005",
    pegawai: [pegawaiDummy[4]], // PG005 - Rizky Maulana
    tanggal: new Date("2024-09-16"),
    waktu_masuk: null,
    waktu_keluar: null,
    status_absen: StatusAbsen.IZIN,
    keterlambatan: 0,
    lembur: 0,
    approved_by: "MGR001",
    approved_status: "Menunggu",
  },
  {
    id: "abs-006",
    pegawai: [pegawaiDummy[0]], // PG001 - Yanto
    tanggal: new Date("2024-09-17"),
    waktu_masuk: new Date("2024-09-17T07:45:00"),
    waktu_keluar: new Date("2024-09-17T18:30:00"),
    status_absen: StatusAbsen.HADIR,
    keterlambatan: 0,
    lembur: 90, // 1.5 jam lembur
    durasi_kerja: 645,
  },
  {
    id: "abs-007",
    pegawai: [pegawaiDummy[1]], // PG002 - Yanti
    tanggal: new Date("2024-09-17"),
    waktu_masuk: new Date("2024-09-17T09:00:00"),
    waktu_keluar: new Date("2024-09-17T17:00:00"),
    status_absen: StatusAbsen.TERLAMBAT,
    keterlambatan: 60,
    lembur: 0,
    durasi_kerja: 480,
  },
  {
    id: "abs-008",
    pegawai: [pegawaiDummy[2]], // PG003 - Budi Santoso
    tanggal: new Date("2024-09-17"),
    waktu_masuk: new Date("2024-09-17T08:15:00"),
    waktu_keluar: new Date("2024-09-17T17:00:00"),
    status_absen: StatusAbsen.TERLAMBAT,
    keterlambatan: 15,
    lembur: 0,
    durasi_kerja: 525,
  },
  {
    id: "abs-009",
    pegawai: [pegawaiDummy[3]], // PG004 - Dewi Lestari
    tanggal: new Date("2024-09-17"),
    waktu_masuk: new Date("2024-09-17T08:00:00"),
    waktu_keluar: new Date("2024-09-17T17:00:00"),
    status_absen: StatusAbsen.HADIR,
    keterlambatan: 0,
    lembur: 0,
    durasi_kerja: 540,
  },
  {
    id: "abs-010",
    pegawai: [pegawaiDummy[4]], // PG005 - Rizky Maulana
    tanggal: new Date("2024-09-17"),
    waktu_masuk: null,
    waktu_keluar: null,
    status_absen: StatusAbsen.CUTI,
    keterlambatan: 0,
    lembur: 0,
    approved_by: "MGR002",
    approved_status: "Diterima",
    approved_date: new Date("2024-09-10T14:20:00"),
  },
  {
    id: "abs-011",
    pegawai: [pegawaiDummy[0]], // PG001 - Yanto
    tanggal: new Date("2024-09-18"),
    waktu_masuk: new Date("2024-09-18T08:00:00"),
    waktu_keluar: new Date("2024-09-18T19:00:00"),
    status_absen: StatusAbsen.HADIR,
    keterlambatan: 0,
    lembur: 120, // 2 jam lembur
    durasi_kerja: 660,
  },
  {
    id: "abs-012",
    pegawai: [pegawaiDummy[1]], // PG002 - Yanti
    tanggal: new Date("2024-09-18"),
    waktu_masuk: null,
    waktu_keluar: null,
    status_absen: StatusAbsen.TIDAK_HADIR,
    keterlambatan: 0,
    lembur: 0,
  },
  {
    id: "abs-013",
    pegawai: [pegawaiDummy[2]], // PG003 - Budi Santoso
    tanggal: new Date("2024-09-18"),
    waktu_masuk: new Date("2024-09-18T08:45:00"),
    waktu_keluar: new Date("2024-09-18T16:45:00"),
    status_absen: StatusAbsen.TERLAMBAT,
    keterlambatan: 45,
    lembur: 0,
    durasi_kerja: 480,
  },
  {
    id: "abs-014",
    pegawai: [pegawaiDummy[3]], // PG004 - Dewi Lestari
    tanggal: new Date("2024-09-18"),
    waktu_masuk: new Date("2024-09-18T08:00:00"),
    waktu_keluar: new Date("2024-09-18T15:30:00"),
    status_absen: StatusAbsen.PULANG_CEPAT,
    keterlambatan: 0,
    lembur: 0,
    durasi_kerja: 450,
  },
  {
    id: "abs-015",
    pegawai: [pegawaiDummy[4]], // PG005 - Rizky Maulana
    tanggal: new Date("2024-09-18"),
    waktu_masuk: null,
    waktu_keluar: null,
    status_absen: StatusAbsen.SAKIT,
    keterlambatan: 0,
    lembur: 0,
    approved_by: "MGR001",
    approved_status: "Ditolak",
    approved_date: new Date("2024-09-18T09:15:00"),
  },
  {
    id: "abs-016",
    pegawai: [pegawaiDummy[0]], // PG001 - Yanto
    tanggal: new Date("2024-09-19"),
    waktu_masuk: new Date("2024-09-19T07:30:00"),
    waktu_keluar: new Date("2024-09-19T17:30:00"),
    status_absen: StatusAbsen.HADIR,
    keterlambatan: 0,
    lembur: 30,
    durasi_kerja: 600,
  },
  {
    id: "abs-017",
    pegawai: [pegawaiDummy[1]], // PG002 - Yanti
    tanggal: new Date("2024-09-19"),
    waktu_masuk: new Date("2024-09-19T08:20:00"),
    waktu_keluar: new Date("2024-09-19T17:20:00"),
    status_absen: StatusAbsen.TERLAMBAT,
    keterlambatan: 20,
    lembur: 20,
    durasi_kerja: 540,
  },
  {
    id: "abs-018",
    pegawai: [pegawaiDummy[2]], // PG003 - Budi Santoso
    tanggal: new Date("2024-09-19"),
    waktu_masuk: null,
    waktu_keluar: null,
    status_absen: StatusAbsen.IZIN,
    keterlambatan: 0,
    lembur: 0,
    approved_by: "MGR002",
    approved_status: "Menunggu",
  },
  {
    id: "abs-019",
    pegawai: [pegawaiDummy[3]], // PG004 - Dewi Lestari
    tanggal: new Date("2024-09-19"),
    waktu_masuk: new Date("2024-09-19T08:00:00"),
    waktu_keluar: new Date("2024-09-19T20:00:00"),
    status_absen: StatusAbsen.HADIR,
    keterlambatan: 0,
    lembur: 180, // 3 jam lembur
    durasi_kerja: 720,
  },
  {
    id: "abs-020",
    pegawai: [pegawaiDummy[4]], // PG005 - Rizky Maulana
    tanggal: new Date("2024-09-19"),
    waktu_masuk: new Date("2024-09-19T08:10:00"),
    waktu_keluar: new Date("2024-09-19T16:40:00"),
    status_absen: StatusAbsen.TERLAMBAT,
    keterlambatan: 10,
    lembur: 0,
    durasi_kerja: 510,
  },
];
