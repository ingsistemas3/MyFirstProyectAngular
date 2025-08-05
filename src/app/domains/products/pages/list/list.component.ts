import { Component, signal, inject } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component'; 
import { HeaderComponent } from '@shared/components/header/header.component';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  products = signal<Product[]>([]);
  private cartServices = inject(CartService);
  private productService = inject(ProductService);

  // constructor() {

  //   const initialProducts: Product[] = [
  //     { id: 1, title: 'Product 1', price: 100, description: 'Description of Product 1', images: 'https://picsum.photos/640/640?r=23', createdAt: new Date().toISOString() },
  //     { id: 2, title: 'Product 2', price: 200, description: 'Description of Product 2', images: 'https://picsum.photos/640/640?r=24', createdAt: new Date().toISOString() },
  //     { id: 3, title: 'Product 3', price: 300, description: 'Description of Product 3', images: 'https://picsum.photos/640/640?r=25', createdAt: new Date().toISOString() }
  //   ];
  //   this.products.set(initialProducts);
  // }

  ngOnInit() {
    this.productService.getProducts()
    .subscribe({
      next: (products) => {
      this.products.set(products);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      }
    });
  }

  addToCart(product: Product) {
    this.cartServices.addToCart(product);
  }

}
