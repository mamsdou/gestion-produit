import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Info} from "../components/produit/info";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient

  ) { }

  getInfoOfQuantite(quantite: number, product: string) {
    return quantite > 10
      ? quantite + " " + product
      : "commander le " + product;
  }


  listProducts(){
    return this.http.get<Info []>(`${environment.productUrl}`);
//    simulation liste local
//    return this.http.get<Info>(`${"assets/info.json"}`);
  }

  commander(info: Info){
  return this.http.post<Info>(`${environment.envoyerCommandeUrl}`, info)
  }

  annuler(info: Info){
    return this.http.post<Info>(`${environment.annulerCommandeUrl}`, info)
  }

  relancer(info: Info){
    return this.http.post<Info>(`${environment.relancerCommandeUrl}`, info)

}
}
