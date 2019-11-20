import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { ServiciosComponent } from './components/servicios/servicios.component';

import { TrabajaComponent } from './components/trabaja/trabaja.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ServiciosComponent,
   
    TrabajaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
