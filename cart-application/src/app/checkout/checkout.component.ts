import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/entity';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  id: number;
  // PurchaseItems = 0
  itemCount: number = 1;
  product_info_details: Product;
  details;
  cart_info = [];
  constructor(private route: DataService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.route.getCartDetails().subscribe(res => {
      this.product_info_details = res
      console.log(this.product_info_details)
    })
  }


  addItems(products) {

    console.log(this.product_info_details)
    this.route.addProduct(products);
  }

  minusItems(products) {
    this.route.addProduct(products);
  }
}

