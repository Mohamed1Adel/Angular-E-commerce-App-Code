import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { product } from '../product-view/productModal';
import { FormControl , FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{


  showProduct:any=[]
  public totalAmount:number = 0;
  public addressForm = false;

  myForm:FormGroup|any



  constructor(private productsServices:ApiService){

  }


  ngOnInit(): void {
    this.productsServices.products().subscribe((products)=>{
      this.showProduct = products
      console.log(this.showProduct);
      this.totalAmount = this.productsServices.calculatePrice()
      console.log(this.totalAmount);
    
    })

    //form 
    this.myForm = new FormGroup({
      email:new FormControl('',[Validators.required]),
      name:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
    })



  }

  deleteItem(product:product){
    this.productsServices.removeCartItem(product)
  }

  empty(){
    this.productsServices.removeAllProducts()
  }

  cancel(){
    this.addressForm = false;
    this.myForm.reset()
  }

  onSubmit(){
    this.myForm.value;
    console.log(this.myForm.value);
    this.myForm.reset()
    
  }

}
