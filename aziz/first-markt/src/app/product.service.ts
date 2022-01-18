import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private productsUrl: string;
  private apiServerUrl = environment.apiBaseUrl;
  public dataForm:  FormGroup;

  constructor(private http: HttpClient) { 
    this.productsUrl = "http://localhost:8080/products";
  }

  private baseURL = "http://localhost:8080/add";
  
  public findAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
    
  }

  createProduct(formData: FormData): Observable<Object>{
    return this.http.post(`${this.baseURL}`, formData);
  }

  public getProduct(id:string): Observable<Product> {
    return this.http.get<Product>(`${this.apiServerUrl}/single/${id}`);
  }

  public addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiServerUrl}/product/add`, product);
  }

  public findAllUsers(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:8080/users");
    
  }

}
