import { Component,EventEmitter, Input,Output, OnInit } from '@angular/core';
import { Product } from '../Models/Product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() product:Product={id:0,title:"",price:0,quantity:0,like:0};
  @Output() incrementEvent=new EventEmitter<Product>();
  
  

  buy(){
    this.product.quantity--;
  }
  like(){
    //this.product.like++;
    this.incrementEvent.emit(this.product);

  }

}
