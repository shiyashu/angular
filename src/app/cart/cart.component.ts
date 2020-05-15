import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  itemsMyCart;//购物车
  checkoutForm;//结账表单
  constructor(
    private cart: CartService,
    private fb:FormBuilder,
  ) { 
    this.checkoutForm = this.fb.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.itemsMyCart = this.cart.getItems();
  }
  onSubmit(customerData) {
    console.log(customerData);
    // Process checkout data here
    //提交
    this.itemsMyCart = this.cart.clearCart();//清空购物车
    this.checkoutForm.reset();//重置表单
    console.warn('Your order has been submitted', customerData);
  }

}