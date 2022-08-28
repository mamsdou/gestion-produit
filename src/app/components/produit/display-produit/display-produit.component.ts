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
  }

  listProducts(){
    this.service.listProducts().subscribe(
      (info) => (
        this.infos = info)
    )
  }

  @HostListener("mouseenter") mouseenter() {
    this.relanceEl.nativeElement.style.backgroundColor = "red";
  }

  @HostListener("mouseleave") mouseleave() {
    this.relanceEl.nativeElement.style.backgroundColor = "transparent";
  }


  infoOfQuantite(quantite: number, product: string){
    return this.service.getInfoOfQuantite(quantite, product);
  }

  command(info: Info) {
    return this.service.commander(info);
  }

  cancel(info: Info) {
    return this.service.annuler(info);
  }

  // permet de faire une relance
  relancer(info: Info) {
    this.actionDeVerification();
    return this.service.relancer(info);
  }

  public actionDeVerification() {
    //.....
    return true;
  }
}
