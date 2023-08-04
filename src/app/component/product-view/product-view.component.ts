import { Component ,OnInit} from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from './productModal';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit{

  products?:any|product[]
constructor(private productServices:ApiService){

}
  ngOnInit(): void {
    this.displayProducts()
  }

  displayProducts(){
    this.productServices.getProducts().subscribe((products)=>{
      this.products = products
      console.log(this.products);
      
    })
  }

  addToCart(product:product){
    this.productServices.addToCart(product)
  }
  removeItem(product:product){
    this.productServices.removeCartItem(product)
  }


}
