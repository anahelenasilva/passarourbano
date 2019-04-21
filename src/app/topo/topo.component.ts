import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  constructor(private service: OfertasService) { }

  ofertas: Observable<Oferta[]>;

  ngOnInit() {
  }

  public pesquisar(valorPesquisaOferta: string): void {
    this.ofertas = this.service.pesquisarOfertas(valorPesquisaOferta);
    this.ofertas.subscribe(
      (ofertas: Oferta[]) => { console.log(ofertas); },
      ((erro: any) => {  }),
      (() => { console.log('Fluxo de eventos completo'); })
    );
  }

}
