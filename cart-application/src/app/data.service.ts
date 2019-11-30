import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from './models/entity';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  cart_items = [];
  itemId: number;
  productList;
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  private cartData = new BehaviorSubject<any>({});
  // currentCartDetails = this.cartData.asObservable();

  constructor(private _http: HttpClient) { }

  getDetails() {
    this.productList = this._http.get<Product>('https://api.myjson.com/bins/qzuzi')
    //  console.log(this.productList)
    return this.productList;
  }


  getCartDetails(): Observable<Product> {
    return this.cartData.asObservable(); 
  }

  setCartDetails(items){
    this.cartData.next(items);
  }


  addProduct(product) {
    // console.log(product)
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.quantity += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    console.log(  this.cart)
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    // console.log(product)
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.quantity += 1;
        if (p.quantity == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    console.log(  this.cart)
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  setItemCount(){
    // this.cartItemCount =0
  }


}
