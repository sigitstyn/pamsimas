/* eslint-disable @typescript-eslint/naming-convention */
export interface Pembayaran{
  id_invoice?: string;
  id?: string;
  no_pelanggan?: string;
  nama_pelanggan?: string;
  alamat_pelanggan?: string;
  bulan?: string;
  tahun?: string;
  jumlah_meteran?: string;
  nama_pencatat?: string;
  abonamen?: string;
  kekurangan?: string;
  total_biaya?: string;
  jumlah_bayar?: string;
  status_pembayaran?: string;
  nama_penarik?: string;
  kategori?: string;
}
