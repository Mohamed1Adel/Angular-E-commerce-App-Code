import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productModal';

@Component({
  selector: 'app-product-deteils',
  templateUrl: './product-deteils.component.html',
  styleUrls: ['./product-deteils.component.css']
})
export class ProductDeteilsComponent implements OnInit{
 
 productDetails:any|product;
 showadd:boolean = true;
 showremove:boolean = false
 constructor(private productServices:ApiService,private activatedRoute:ActivatedRoute){

 }
 
 
  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.paramMap.get("id")

    productId && this.productServices.getProductById(productId).subscribe((productData)=>{
this.productDetails = productData
console.log(this.productDetails);

    })  }



    addToCart(product:product){
      this.showadd = false;
      this.showremove = true;
      this.productServices.addToCart(product)
    }

    removeItem(product:product){
      this.showadd = true
      this.showremove = false;
      this.productServices.removeCartItem(product)
    }
    





}
