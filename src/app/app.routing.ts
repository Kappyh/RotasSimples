/* imports para criação das rotas */
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
/* fim dos imports para criação de rotas */
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';

/*
criar constante do tipo Routes que vai receber um Array de objetos que
irá conter o path e o component de cada rota */
export const rotas: Routes = [
    { path: '', component: HomeComponent },
    { path: 'portfolio', component: PortfolioComponent }
]

// criar constante do tipo ModuleWithProviders e informar as rotas raíz
export const routing: ModuleWithProviders = RouterModule.forRoot(rotas);

