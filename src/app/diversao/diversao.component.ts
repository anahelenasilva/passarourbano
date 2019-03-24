import { OfertasService } from './../ofertas.service';
import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.scss'],
  providers: [ OfertasService ]
})
export class DiversaoComponent implements OnInit {

  constructor(private service: OfertasService) { }

  ofertas: Oferta[];

  ngOnInit() {
    this.service.getOfertasPorCategoria('diversao')
    .then((ofertas: any) => {
      this.ofertas = ofertas;
    });
  }

}
