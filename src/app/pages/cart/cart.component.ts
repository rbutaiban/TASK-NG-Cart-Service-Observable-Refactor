import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../../data/products';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, AsyncPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cart$ = this.cartService.cart$;

  constructor(private cartService: CartService) {}

  increment(item: Product) {
    this.cartService.incrementQuantity(item.id);
  }

  decrement(item: Product) {
    this.cartService.decrementQuantity(item.id);
  }

  remove(item: Product) {
    this.cartService.removeFromCart(item.id);
  }

  clearCart() {
    this.cartService.clearCart();
  }

  getTotal() {
    return this.cartService.getTotal();
  }
}
