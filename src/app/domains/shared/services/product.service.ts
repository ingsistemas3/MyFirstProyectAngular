import { Injectable, inject } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);

  constructor() { }

  getProducts() {
    return this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').pipe(
      map(products => {
        return products.map(product => ({
          ...product,
          images: Array.isArray(product.images) && product.images.length > 0
            ? product.images
            : ['https://picsum.photos/640/640?r=' + Math.random()]
        }));
      })
    );
  }
}
