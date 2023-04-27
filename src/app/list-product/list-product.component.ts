import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent {

  listProduct:Product[]=[
    {id:1,title:"souris",price:5,quantity:2,like:2},
    {id:1,title:"tel",price:5,quantity:2,like:2},
    {id:1,title:"pc",price:5,quantity:2,like:2},
    {id:1,title:"casque",price:5,quantity:2,like:2},
    {id:1,title:"ecouteur",price:5,quantity:2,like:2},
    {id:1,title:"ecran",price:5,quantity:2,like:2},
    {id:1,title:"clavier",price:5,quantity:2,like:2}

]

incrementEventLike(product:Product){
  let i:number=this.listProduct.indexOf(product);
  this.listProduct[i].like++;
}

}
