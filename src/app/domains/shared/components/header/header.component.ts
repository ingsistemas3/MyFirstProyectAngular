import { Component, signal, Input, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.model';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);

  private cartServices = inject(CartService);

  cart = this.cartServices.cart;
  total = this.cartServices.total;

  toggleSideMenu() {
    this.hideSideMenu.set(!this.hideSideMenu());
  }

}
