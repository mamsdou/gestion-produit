import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../../../services/product.service";
import {environment} from "../../../../environments/environment";
import {Info} from "../info";


@Component({
  selector: 'app-display-produit',
  templateUrl: './display-produit.component.html',
  styleUrls: ['./display-produit.component.css']
})
export class DisplayProduitComponent implements OnInit {

  @ViewChild("relance") relanceEl!: ElementRef;
  infos: any;

  constructor(private http: HttpClient, public service: ProductService) {
  }

  ngOnInit(): void {
  this.listProducts();
  this.listLocal();
  }

  listProducts(){
    this.service.listProducts().subscribe(
      (info) => (
        this.infos = info)
    )
  }

  listLocal(){
    this.http.get("assets/info.json").subscribe(data =>{
      console.log("daaaaatttaa",data);
      //this.products = data;
    })
  }

  @HostListener("mouseenter") mouseenter() {
    this.relanceEl.nativeElement.style.backgroundColor = "red";
  }

  @HostListener("mouseleave") mouseleave() {
    this.relanceEl.nativeElement.style.backgroundColor = "transparent";
  }

  // @HostListener('mouseexit') mouseexit() {
  //     if(this.relanceEl) {
  //         this.relanceEl.nativeElement.style.backgroundColor = 'yellow';
  //     }
  // }

  infoOfQuantite(quantite: number, product: string){
    return this.service.getInfoOfQuantite(quantite, product);
  }

  command(info: Info) {
    this.http.post(environment.envoyerCommandeUrl, info);
  }

  cancel(info: Info) {
    this.http.post(environment.annulerCommandeUrl, info);
  }

  // permet de faire une relance
  rev(info: Info) {
    this.actionDeVerification();
    this.http.post(environment.relancerCommandeUrl, info);
  }

  public actionDeVerification() {
    //.....
    return true;
  }
}
