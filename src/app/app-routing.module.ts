import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './component/product-view/product-view.component';
import { ProductDeteilsComponent } from './component/product-deteils/product-deteils.component';
import { CartPageComponent } from './component/cart-page/cart-page.component';
import { OrderPageComponent } from './component/order-page/order-page.component';

const routes: Routes = [
  {
    path:'',component:ProductViewComponent
  },
  {
    path:'product-details/:id',component:ProductDeteilsComponent
  },
  {
    path:'cart-page',component:CartPageComponent
  },
  {
    path:'order-page',component:OrderPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
