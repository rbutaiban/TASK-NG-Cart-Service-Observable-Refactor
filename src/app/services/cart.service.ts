import { Injectable } from '@angular/core';
import { Product } from '../../data/products';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems: (Product & { quantity: number })[] = [];

  addToCart(product: Product) {
    const item = this.cartItems.find((p) => p.id === product.id);
    if (item) {
      if (item.quantity < item.stock) {
        item.quantity++;
      }
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }

  getCart() {
    return this.cartItems;
  }

  incrementQuantity(productId: number) {
    const item = this.cartItems.find((p) => p.id === productId);
    if (item && item.quantity < item.stock) {
      item.quantity++;
    }
  }

  decrementQuantity(productId: number) {
    const item = this.cartItems.find((p) => p.id === productId);
    if (item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.removeFromCart(productId);
      }
    }
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter((p) => p.id !== productId);
  }

  clearCart() {
    this.cartItems = [];
  }

  getTotal() {
    return this.cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }
}
