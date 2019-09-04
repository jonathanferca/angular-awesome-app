import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './components/profile/profile.component';
import { DataBindingOneWay1Component } from './components/data-binding-one-way1/data-binding-one-way1.component';
import { DataBindingOneWay2Component } from './components/data-binding-one-way2/data-binding-one-way2.component';
import { DataBindingTwoWayComponent } from './components/data-binding-two-way/data-binding-two-way.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'data-binding-one-way1', component: DataBindingOneWay1Component },
  { path: 'data-binding-one-way2', component: DataBindingOneWay2Component },
  { path: 'data-binding-two-way', component: DataBindingTwoWayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
