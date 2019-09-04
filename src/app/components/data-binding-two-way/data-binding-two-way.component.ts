import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-two-way',
  templateUrl: './data-binding-two-way.component.html',
  styleUrls: ['./data-binding-two-way.component.scss']
})
export class DataBindingTwoWayComponent implements OnInit {

  public personName = 'Daenerys';

  public personLastName = 'Targaryen';

  constructor() { }

  ngOnInit() {

  }

  getPersonNameFromClass() {
    alert(this.personName);
  }

  getPersonLastNameFromClass() {
    alert(this.personLastName);
  }

}
