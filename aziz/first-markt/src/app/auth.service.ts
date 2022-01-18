import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';



const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  register(formData: FormData): Observable<Object>{
    return this.http.post(this.url+'registr', formData);
  }
  login(formData: FormData): Observable<Object> {
    
    return this.http.get<User>(this.url+ 'login');
  }
  
}
