/** @format */

import {
  StatusPembayaran,
  TagihanSiswaEntity,
} from "@/domain/entities/tagihan-siswa.entity";
import { siswaDummy } from "./siswa.data";

export const tagihanSiswaDummy: TagihanSiswaEntity[] = [
  {
    kode_pembayaran: "INV001",
    siswa: [siswaDummy[0]],
    status_pembayaran: StatusPembayaran.LUNAS,
    total_pembayaran: "$250.00",
  },
  {
    kode_pembayaran: "INV002",
    siswa: [siswaDummy[1]],

    status_pembayaran: StatusPembayaran.MENUNGGU,
    total_pembayaran: "$150.00",
  },
  {
    kode_pembayaran: "INV003",
    siswa: [siswaDummy[2]],

    status_pembayaran: StatusPembayaran.BELUM_DIBAYAR,
    total_pembayaran: "$350.00",
  },
  {
    kode_pembayaran: "INV004",
    siswa: [siswaDummy[3]],

    status_pembayaran: StatusPembayaran.LUNAS,
    total_pembayaran: "$450.00",
  },
  {
    kode_pembayaran: "INV005",
    siswa: [siswaDummy[4]],

    status_pembayaran: StatusPembayaran.LUNAS,
    total_pembayaran: "$550.00",
  },
  {
    kode_pembayaran: "INV006",
    siswa: [siswaDummy[5]],

    status_pembayaran: StatusPembayaran.MENUNGGU,
    total_pembayaran: "$200.00",
  },
  {
    kode_pembayaran: "INV007",
    siswa: [siswaDummy[6]],

    status_pembayaran: StatusPembayaran.BELUM_DIBAYAR,
    total_pembayaran: "$300.00",
  },
];
