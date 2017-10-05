import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing'; // import da constante que contém o Root das rotas

import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing // declarando import do root das rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
