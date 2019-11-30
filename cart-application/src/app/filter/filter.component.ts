import { Component, OnInit } from '@angular/core';
import { SliderType } from "igniteui-angular";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  public sliderType = SliderType;
  public priceRange: PriceRange = new PriceRange(0, 1000);

  constructor() { }

  ngOnInit() {
  }
  public updatePriceRange(event) {
    const prevPriceRange = this.priceRange;
    switch (event.id) {
      case "lowerInput": {
        if (!isNaN(parseInt(event.value, 10))) {
          this.priceRange = new PriceRange(event.value, prevPriceRange.upper);
        }
        break;
      }
      case "upperInput": {
        if (!isNaN(parseInt(event.value, 10))) {
          this.priceRange = new PriceRange(prevPriceRange.lower, event.value);
        }
        break;
      }
    }
  }
}

class PriceRange {
  constructor(
    public lower: number,
    public upper: number
  ) {
  }
}