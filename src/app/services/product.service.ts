import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../entities/entity';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/product');
  }
}
