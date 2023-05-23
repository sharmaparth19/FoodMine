import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  cartItems:any[]=[];

  constructor() { }

  addTocart(food:any){
    this.cartItems.push(food);
  }

  getCartItems(){
    return this.cartItems;
  }

   saveCartItems(){
    localStorage.setItem ('cartItems',JSON.stringify(this.cartItems))
  }

   localCartItems(){
    const cartItems = localStorage.getItem('cartItems');
    if(cartItems){
      this.cartItems = JSON.parse(cartItems)
    }
  }
}
