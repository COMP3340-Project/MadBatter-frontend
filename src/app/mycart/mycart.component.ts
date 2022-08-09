import { Component, OnInit } from '@angular/core';
import { ProductPageComponent } from '../product-page/product-page.component';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})

export class MycartComponent implements OnInit {

  cartItems = []; 
  numItems = [];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item:ProductPageComponent){
    const exist = this.cartItems.find((item) =>{
      return item.id === ProductPageComponent.id;
    });

    if(exist)
      exist.qty++;
    else
      this.cartItems.push(product);

      this.numItems.next(this.cartItems);
      console.log(this.cartItems);
  }

}
