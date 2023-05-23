import { Component } from '@angular/core';
import {sample_foods} from '../../../assets/data';
import { MyserviceService } from 'src/app/services/cart.service';
import { Food } from 'src/app/model/food';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {


  foods = sample_foods

  cartItems!: any[];

  constructor(private cart:MyserviceService){
    this.cartItems = this.cart.getCartItems();
    this.cart.localCartItems()
  }

  addTocart(food:any){
    this.cartItems.push(food);
  }

  ngOnInit():void{

  }

}
