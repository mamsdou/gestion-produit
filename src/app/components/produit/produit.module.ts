import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProduitRouting} from "./produit.routing";
import {DisplayProduitComponent} from "./display-produit/display-produit.component";



@NgModule({
  declarations: [DisplayProduitComponent],
  imports: [
    CommonModule,
    ProduitRouting
  ],
  exports: [DisplayProduitComponent]
})
export class ProduitModule { }
