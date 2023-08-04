import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../component/product-view/productModal';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public cartItemsList:any=[];
  public productsList = new BehaviorSubject<any>([])

  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get<product[]>('https://dummyjson.com/products')
  }

  getProductById(id:any){
    return this.http.get<product>('https://dummyjson.com/products/'+id)
  }

  addToCart(data:product){
    this.cartItemsList.push(data);
    this.productsList.next(this.cartItemsList);
    console.log(this.cartItemsList);
    
  }

  products(){
    return this.productsList.asObservable()
  }

  removeCartItem(data:product){
    this.cartItemsList.map((a:product,index:product)=>{
      if(data.id === a.id){
        this.cartItemsList.splice(index,1)
      }
    })
    this.productsList.next(this.cartItemsList)
  }

  //total calculated amount 
  calculatePrice(){
    let total = 0;
    this.cartItemsList.map((product:any)=>{
      total += product.price
    })
    return total
  }

  removeAllProducts(){
    this.cartItemsList = []
    this.productsList.next(this.cartItemsList)
  }

}
