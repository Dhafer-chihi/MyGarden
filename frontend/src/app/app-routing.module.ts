import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ProductListComponent } from './components/pages/product-list/product-list.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';

const routes: Routes = [
  {path : '', component : ProductListComponent},
  {path :'search/:searchTerm' , component : ProductListComponent },
  {path : 'tag/:tag' , component : ProductListComponent},
  {path : 'product/:id',component : ProductPageComponent},
  {path : 'cart-page' , component : CartPageComponent},
  {path : 'login' , component : LoginPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
