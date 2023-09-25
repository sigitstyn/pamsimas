/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

export interface Users{
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  role: string;
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'http://localhost/api-ionic/api/users';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Users[]>{
    return this.http.get<Users[]>(this.url);
  }

  getUserById(id: string): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.get<User>(url);
  }

  get(id: string){
    return this.http.get<Users>(this.url + '/' + id);
  }

  create(users: Users){
    return this.http.post<Users>(this.url, users);
  }

  update(users: Users, id: string){
    return this.http.put<Users>(this.url + '/' + id, users);
  }

  remove(id: string){
    return this.http.delete<Users>(this.url + '/' + id);
  }
}
