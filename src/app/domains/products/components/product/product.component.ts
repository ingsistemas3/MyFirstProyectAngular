import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReversePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // /**
  //  * The title of the product to display.
  //  */
  // @Input({required: true}) title: string = '';

  // /**
  //  * The image URL of the product.
  //  */
  // @Input() img: string = 'https://picsum.photos/640/640?r='+Math.random();

  // /**
  //  * The description of the product.
  //  */
  // @Input() description: string = 'Descripción del producto';

  // /**
  //  * The price of the product.
  //  */
  // @Input() price: number = 0;

  @Input({required: true }) product!: Product;

  @Output() addToCart = new EventEmitter();

  addToCartHandle() {
    this.addToCart.emit(this.product);
  }
}
