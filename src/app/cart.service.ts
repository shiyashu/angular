import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class CartService {
  items=[];
  constructor(
    private http:HttpClient,
  ) { }
  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {//运送费
    return this.http.get('/assets/shipping.json');
  }
}