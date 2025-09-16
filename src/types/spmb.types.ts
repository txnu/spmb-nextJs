/** @format */

export interface SPMBTypes {
  id: string;
  nama_pendaftar: string;
  jenis_kelamin: "Laki-laki" | "Perempuan";
  nik_nisn: string;
  asal_sekolah: string;
  ttl: string;
  orang_tua: string;
  alamat: string;
  status: "Diverifikasi" | "Pending";
}
