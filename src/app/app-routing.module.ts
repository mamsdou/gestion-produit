import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisplayProduitComponent} from "./components/produit/display-produit/display-produit.component";


const routes: Routes = [

  {
    path: 'produits',
    loadChildren: () => import('./components/produit/produit.module').then(m => m.ProduitModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
