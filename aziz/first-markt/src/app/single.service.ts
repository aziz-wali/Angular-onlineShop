import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class SingleService {

  private productsUrl: string;
  constructor(private http: HttpClient) { 
    this.productsUrl = 'http://localhost:8080/single/:id';
}
public findAll(): Observable<Product[]> {
  return this.http.get<Product[]>(this.productsUrl);
  
}
}
