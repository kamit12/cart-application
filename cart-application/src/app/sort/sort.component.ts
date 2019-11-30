import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
  isSelect : number;
  @Output() sortDetails : EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  sortHighLow(){
    const id = 1
    this.isSelect = id;
    console.log(this.isSelect)
    this.sortDetails.emit(this.isSelect)
  }

  sortLowHigh(){
    const id = 2
    this.isSelect = id;
    console.log(this.isSelect)
    this.sortDetails.emit(this.isSelect)
  }

  sortDiscount(){
    const id = 3
    this.isSelect = id;
    console.log(this.isSelect)
    this.sortDetails.emit(this.isSelect)
  }
}
