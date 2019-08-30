import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-one-way1',
  templateUrl: './data-binding-one-way1.component.html',
  styleUrls: ['./data-binding-one-way1.component.scss']
})
export class DataBindingOneWay1Component implements OnInit {

  public favoriteTvSeries = 'Game of Thrones';

  public shouldDisplay = true;

  constructor() { }

  ngOnInit() {

  }

}
