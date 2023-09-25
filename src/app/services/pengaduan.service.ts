/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';

export interface Pengaduan{
  id: string;
  nama_pelapor: string;
  kontak_pelapor: string;
  alamat: string;
  keterangan: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class PengaduanService {


  private url = 'http://localhost/api-ionic/api/pengaduan';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Pengaduan[]>{
    return this.http.get<Pengaduan[]>(this.url);
  }

  get(id: string){
    return this.http.get<Pengaduan>(this.url + '/' + id);
  }

  create(pengaduan: Pengaduan){
    return this.http.post<Pengaduan>(this.url, pengaduan);
  }

  update(pengaduan: Pengaduan, id: string){
    return this.http.put<Pengaduan>(this.url + '/' + id, pengaduan);
  }

  remove(id: string){
    return this.http.delete<Pengaduan>(this.url + '/' + id);
  }
  deleteAllData(): Observable<any>{
    return this.http.delete(this.url);
  }
}
