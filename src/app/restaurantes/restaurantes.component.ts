import { OfertasService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  constructor(private service: OfertasService) { }

  ofertas: Oferta[];

  ngOnInit() {
    this.service.getOfertasPorCategoria('restaurante')
    .then((ofertas: any) => {
      this.ofertas = ofertas;
    });
  }

}
