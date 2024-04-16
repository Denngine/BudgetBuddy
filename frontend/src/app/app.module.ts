import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { KontodarstellungComponent } from './components/kontodarstellung/kontodarstellung.component';
import { MenatsTabelleComponent } from './components/menats-tabelle/menats-tabelle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KontodarstellungComponent,
    MenatsTabelleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
