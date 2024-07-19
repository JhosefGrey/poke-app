import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full' 
    },
    
    {
        path: 'inicio',
        loadComponent: () => import("./pages/home/home.component").then((c) => c.HomeComponent)
    },
    {
        path: 'pokemon/:id',
        loadComponent: () => import("./pages/pokemon/pokemon.component").then((c) => c.PokemonComponent)
    }
];
