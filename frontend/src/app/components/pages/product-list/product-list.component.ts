import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] = [];
  constructor(private productService : ProductService , activatedRoute :ActivatedRoute) {
    let productsObservable : Observable<Product[]>;
    activatedRoute.params.subscribe((params)=>{
      if (params.searchTerm)
      productsObservable = this.productService.getAllProductBySearchTerm(params.searchTerm);
      else if (params.tag)
      productsObservable = this.productService.getAllProductsByTag(params.tag);
      else
      productsObservable = productService.getAll();

      productsObservable.subscribe((serverProducts)=>{
        this.products = serverProducts;
      })
    })

  }

  ngOnInit(): void {
  }


}
