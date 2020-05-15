import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {products} from '../products'
import { FnParam } from '@angular/compiler/src/output/output_ast';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetail;
  constructor(
    private route:ActivatedRoute,//路由，获取id，详情
    private cart:CartService,//购物车
  ) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(
      (param)=>{
        this.productDetail = products[+param.get('productIdHHH')];
        console.log(param)
      }
    )
  }
  addToCart(product) {
    this.cart.addToCart(product);
    window.alert('加入购物车，Your product has been added to the cart!');
  }

}