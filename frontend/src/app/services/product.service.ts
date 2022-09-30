import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCTS_BY_SEARCH_URL, PRODUCTS_BY_TAGS_URL, PRODUCTS_TAGS_URL, PRODUCTS_URL, PRODUCT_BY_ID_URL } from '../shared/constants/urls';
import { Product } from '../shared/models/Product';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAll():Observable<Product[]>{
    // return sample_products;
    return this.http.get<Product[]>(PRODUCTS_URL);
  }
  getAllProductBySearchTerm(searchTerm : string){
    // return this.getAll().filter((product) =>
    // product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return this.http.get<Product[]>(PRODUCTS_BY_SEARCH_URL + searchTerm);

  }
getAllTags():Observable<Tag[]>{
  // return sample_tags;
  return this.http.get<Tag[]>(PRODUCTS_TAGS_URL);
}
getAllProductsByTag(tag:string):Observable<Product[]>{
  // return tag == "All"?
  // this.getAll():
  // this.getAll().filter(product => product.tags?.includes(tag));
  //           ***************************** ou
  // return this.getAll().filter(product => product.tags?.includes(tag));
  return tag === "All" ?
  this.getAll():
  this.http.get<Product[]>(PRODUCTS_BY_TAGS_URL + tag);
}

getProductById(productId : string):Observable<Product>{
  // return this.getAll().find(product => product.id == productId) ?? new Product;
  return this.http.get<Product>(PRODUCT_BY_ID_URL + productId)
}

}
