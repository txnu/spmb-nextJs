/** @format */

export interface PegawaiEntity {
  nip: string;
  nama_pegawai: string;
  jenis_kelamin: "Laki-laki" | "Perempuan";
  no_hp: string;
  alamat: string;
  ttl: string;
  status?: "Honor" | "PNS";
}
