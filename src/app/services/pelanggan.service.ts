/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

export interface Pelanggan{
  id: string;
  no_pelanggan: string;
  nama_pelanggan: string;
  alamat_pelanggan: string;
  username: string;
  password: string;
  kategori: string;
  qrCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class PelangganService {
  id: string;
  no_pelanggan: string;
  nama_pelanggan: string;
  alamat_pelanggan: string;
  username: string;
  kategori: string;
  qrCode: string;

  private url = 'http://localhost/api-ionic/api/pelanggan';

  constructor(
    private navCtrl: NavController,
    private http: HttpClient
  ) { }


  back() {
    this.navCtrl.navigateBack('/home/data-pelanggan');
  }

  getAll(): Observable<Pelanggan[]>{
    return this.http.get<Pelanggan[]>(this.url);
  }

  get(id: string){
    return this.http.get<Pelanggan>(this.url + '/' + id);
  }

  create(pelanggan: Pelanggan){
    return this.http.post<Pelanggan>(this.url, pelanggan);
  }

  update(pelanggan: Pelanggan, id: string){
    return this.http.put<Pelanggan>(this.url + '/' + id, pelanggan);
  }

  remove(id: string){
    return this.http.delete<Pelanggan>(this.url + '/' + id);
  }
}
