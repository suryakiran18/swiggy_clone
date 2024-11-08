import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private totalAmount: number = 0;
  private cartSubject: BehaviorSubject<any[]> = new BehaviorSubject(this.cartItems);
  private totalSubject: BehaviorSubject<number> = new BehaviorSubject(this.totalAmount);

  constructor() {} 

  addToCart(item: any): void {
    this.cartItems.push(item);
    this.totalAmount += item.price;
    this.cartSubject.next(this.cartItems);
    this.totalSubject.next(this.totalAmount);
  }

  getCartItems() {
    return this.cartSubject.asObservable();
  }

  getCartTotal() {
    return this.totalSubject.asObservable();
  }

  getItemsCount() {
    return this.cartSubject.asObservable().pipe(map(items => items.length));  
  }

  clearCart() {
    this.cartItems = [];
    this.totalAmount = 0;
    this.cartSubject.next(this.cartItems);
    this.totalSubject.next(this.totalAmount);
  }

  placeOrder(userData: any, restaurantName: string) {
    const orderData = {
      userName: userData.name,
      mobile: userData.mobile,
      items: this.cartItems,
      totalAmount: this.totalAmount,
      restaurantName: restaurantName
    };

    console.log('Order placed:', orderData);
    return new BehaviorSubject({ success: true }).asObservable();
  }
}