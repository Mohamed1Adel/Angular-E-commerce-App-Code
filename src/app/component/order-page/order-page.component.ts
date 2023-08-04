import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit{
  public totalAmount:number=0
  constructor(private productService: ApiService,private router:Router){

  }
  
  ngOnInit(): void {
    setTimeout(()=>{
      this.router.navigate(['/']);
      this.productService.removeAllProducts()
    },4000)





    //total amount coming from api

    this.totalAmount = this.productService.calculatePrice()
    }



}
