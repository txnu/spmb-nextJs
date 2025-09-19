/** @format */

import { SiswaEntity } from "./siswa.entity";

export enum StatusPembayaran {
  LUNAS = "Lunas",
  MENUNGGU = "Menunggu pembayaran",
  BELUM_DIBAYAR = "Belum dibayar",
}

export interface TagihanSiswaEntity {
  kode_pembayaran: string;
  siswa: SiswaEntity[];
  total_pembayaran: string;
  status_pembayaran: StatusPembayaran;
}
