import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { FormFilterComponent } from './components/form-filter/form-filter.component';
import { HomeDetalhesComponent } from './page/home-detalhes/home-detalhes.component';
import { HouseLocationComponent } from './components/house-location/house-location.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormFilterComponent,
    HomeDetalhesComponent,
    HouseLocationComponent
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
