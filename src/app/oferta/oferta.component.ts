import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: OfertasService) { }

  public oferta: Oferta;

  ngOnInit() {
    // this.route.snapshot.params['id']
    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro);
    // });

    this.service.getOfertaPorId(this.route.snapshot.params['id'])
    .then((oferta: Oferta) => {
        this.oferta = oferta;
    });

    /*this.route.params.subscribe(
      (parametro: any) => { console.log(parametro); },
      (erro: any) => console.log(erro),
      () => console.log('O processamento foi concluído com sucesso'));*/
  }

}
