import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingOneWay2Component } from './data-binding-one-way2.component';

describe('DataBindingOneWay2Component', () => {
  let component: DataBindingOneWay2Component;
  let fixture: ComponentFixture<DataBindingOneWay2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingOneWay2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingOneWay2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
