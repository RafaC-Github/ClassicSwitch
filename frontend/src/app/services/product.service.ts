import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/products');
  }
  getOne(id) {
    return this.httpClient.get('http://localhost:3000/products/' + id);
  }
  getExchangeRates(): Observable<any> {
    return this.httpClient.get('https://api.exchangeratesapi.io/latest');
  }
  searchProducts(search) {
    return this.httpClient.get('http://localhost:3000/products/name/' + search);
  }
}
