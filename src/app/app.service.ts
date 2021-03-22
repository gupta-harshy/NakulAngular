import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {User} from '../modals/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getContacts(): Observable<User[]>{
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }
}
