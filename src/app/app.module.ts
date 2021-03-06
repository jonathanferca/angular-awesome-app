import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DataBindingOneWay1Component } from './components/data-binding-one-way1/data-binding-one-way1.component';
import { DataBindingOneWay2Component } from './components/data-binding-one-way2/data-binding-one-way2.component';
import { DataBindingTwoWayComponent } from './components/data-binding-two-way/data-binding-two-way.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DataBindingOneWay1Component,
    DataBindingOneWay2Component,
    DataBindingTwoWayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
