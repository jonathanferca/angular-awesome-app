import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-one-way2',
  templateUrl: './data-binding-one-way2.component.html',
  styleUrls: ['./data-binding-one-way2.component.scss']
})
export class DataBindingOneWay2Component implements OnInit {

  public clicksTotal = 0;

  constructor() { }

  ngOnInit() {
  }

  incrementClickCounter() {
    this.clicksTotal++;
  }

}
