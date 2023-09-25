/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';

export interface Pembayaran{
  id_invoice: string;
  id: string;
  no_pelanggan: string;
  nama_pelanggan: string;
  alamat_pelanggan: string;
  bulan: string;
  tahun: string;
  jumlah_meteran: string;
  nama_pencatat: string;
  abonamen: string;
  kekurangan: string;
  total_biaya: string;
  status_pembayaran: string;
  nama_penarik: string;
  kategori: string;
  jumlah_bayar: string;
}

@Injectable({
  providedIn: 'root'
})
export class PembayaranService {


  private url = 'http://localhost/api-ionic/api/pembayaran';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Pembayaran[]>{
    return this.http.get<Pembayaran[]>(this.url);
  }

  get(id: string){
    return this.http.get<Pembayaran>(this.url + '/' + id);
  }

  create(pembayaran: Pembayaran){
    return this.http.post<Pembayaran>(this.url, pembayaran);
  }

  update(pembayaran: Pembayaran, id: string){
    return this.http.put<Pembayaran>(this.url + '/' + id, pembayaran);
  }

}
