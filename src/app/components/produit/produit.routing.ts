import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DisplayProduitComponent} from "./display-produit/display-produit.component";

const routes: Routes = [

  {
    path: '',
    component: DisplayProduitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitRouting { }
