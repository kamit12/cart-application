import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnChanges {
  details;
  @Input() selectedValue;
  id: number;
  item;
  cartInfo = []
  constructor(private route: DataService,
    private router: ActivatedRoute) { }

  ngOnChanges(changes: SimpleChanges){
    if (changes['selectedValue'].currentValue == 1) {
      this.updateDetaild(this.compareAscendingPrice) 
    }
    else  if (changes['selectedValue'].currentValue == 2) {
      this.updateDetaild(this.compareDesendingPrice) 
    } 
    else  if (changes['selectedValue'].currentValue == 3) {
      this.updateDetaild(this.compareDiscount) 
    }

  }

  ngOnInit() {
      this.route.getDetails().subscribe(res => {
        this.details = res;
      })
  }

  addItems(id) {
    // console.log('hi',id)
    // this.item = this.details.find(e => e.id == id);
    this.cartInfo.push(id)
    this.route.setCartDetails(this.cartInfo)
    // console.log(this.cartInfo)
  }

  updateDetaild(fincCall) {
    this.details.sort(fincCall)
    // this.ngOnInit();
  }



  compareAscendingPrice(a, b) {
    const priceA = a.price;
    const priceB = b.price;

    let comparison = 0;
    if (priceA > priceB) {
      comparison = 1;
    } else if (priceA < priceB) {
      comparison = -1;
    }
    return comparison;
  }

  compareDesendingPrice(a, b) {
    const priceA = a.price;
    const priceB = b.price;

    let comparison = 0;
    if (priceA > priceB) {
      comparison = 1;
    } else if (priceA < priceB) {
      comparison = -1;
    }
    return comparison * -1;
  }

  compareDiscount(a, b) {
    const discountA = a.discount;
    const discountB = b.discount;

    let comparison = 0;
    if (discountA > discountB) {
      comparison = 1;
    } else if (discountA < discountB) {
      comparison = -1;
    }
    return comparison * -1;
  }


}
