import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingTwoWayComponent } from './data-binding-two-way.component';

describe('DataBindingTwoWayComponent', () => {
  let component: DataBindingTwoWayComponent;
  let fixture: ComponentFixture<DataBindingTwoWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingTwoWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
