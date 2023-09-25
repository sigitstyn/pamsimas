
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pelanggan } from 'src/app/models/pelanggan.model';
import { tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost/api-ionic/api/';
  constructor(private http: HttpClient) { }

  getUserData(): Observable<any> {
    const token = localStorage.getItem('token');
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get(`${this.url}/user.php`, { headers });
  }

  //admin services
  register(user: User) {
    return this.http.post(`${this.url}/register`, user);
  }

  login(credentials: User): Observable<string>{
    return this.http.post<{ token: string }>(`${this.url}/login`, credentials).pipe(
      map(response => response.token)
    );
  }
  isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    // Jika token tidak null, pengguna dianggap masuk
    return token !== null;
  }

  //customer services
  customerLogin(credentials: Pelanggan): Observable<string>{
    return this.http.post<{ token: string }>(`${this.url}/login-user`, credentials).pipe(
      map(response => response.token)
    );
  }
  customerRegister(pelanggan: Pelanggan) {
    return this.http.post(`${this.url}/register-user`, pelanggan);
  }
}
