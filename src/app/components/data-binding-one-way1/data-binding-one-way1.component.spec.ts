import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingOneWay1Component } from './data-binding-one-way1.component';

describe('DataBindingOneWay1Component', () => {
  let component: DataBindingOneWay1Component;
  let fixture: ComponentFixture<DataBindingOneWay1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingOneWay1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingOneWay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
