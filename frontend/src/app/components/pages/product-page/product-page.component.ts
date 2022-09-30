import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product !: Product;
  constructor(activetedRoute : ActivatedRoute, productService : ProductService ,
    private cartService : CartService, private router : Router) {

      activetedRoute.params.subscribe((params)=>{
      if (params.id)
      productService.getProductById(params.id).subscribe(serverProducts=>{
        this.product  = serverProducts;
      });
    })
   }

  ngOnInit(): void {
  }
addToCart(){
  this.cartService.addToCart(this.product);
  this.router.navigateByUrl('/cart-page');
}
}
