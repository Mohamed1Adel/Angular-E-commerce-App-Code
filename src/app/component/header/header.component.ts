import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
 public cartItems:any = 0
 constructor(private productsServices:ApiService){

 }
  ngOnInit(): void {
    this.productsServices.products().subscribe(res=>{
      this.cartItems = res.length
    })
  }



}
