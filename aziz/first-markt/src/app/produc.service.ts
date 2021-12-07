import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProducService {
  private productsUrl: string;
  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) { 
    this.productsUrl = 'http://localhost:8080/products';
  }
  
  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
    
  }
  public getProduct(id:string): Observable<Product> {
    return this.http.get<Product>(`${this.apiServerUrl}/single/${id}`);
  }

}
