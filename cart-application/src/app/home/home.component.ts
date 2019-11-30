import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  selectedValue ;

  ngOnInit() {
  }

  receiveselectSortInfo(event){
    this.selectedValue = event;
    console.log(this.selectedValue)
  }

}
