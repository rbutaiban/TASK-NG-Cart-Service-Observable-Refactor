import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../data/products';
  
export type CartItem = Product & { quantity: number };

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(product: Product): void {
    const currentCart = [...this.cartSubject.value];
    const item = currentCart.find(p => p.id === product.id);

    if (item && item.quantity < item.stock) {
      item.quantity++;
    } else if (!item) {
      currentCart.push({ ...product, quantity: 1 });
    }

    this.cartSubject.next(currentCart);
  }

  incrementQuantity(productId: number): void {
    const updatedCart = this.cartSubject.value.map(item => {
      if (item.id === productId && item.quantity < item.stock) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    this.cartSubject.next(updatedCart);
  }

  decrementQuantity(productId: number): void {
    const updatedCart = this.cartSubject.value
      .map(item => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter(item => item.quantity > 0);

    this.cartSubject.next(updatedCart);
  }

  removeFromCart(productId: number): void {
    const updatedCart = this.cartSubject.value.filter(item => item.id !== productId);
    this.cartSubject.next(updatedCart);
  }

  clearCart(): void {
    this.cartSubject.next([]);
  }

  getTotal(): number {
    return this.cartSubject.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  getCartSnapshot(): CartItem[] {
    return this.cartSubject.value;
  }
}


