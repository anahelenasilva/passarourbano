import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer } from 'rxjs';
// import { Observable, of } from 'rxjs';

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

      /*let teste = Observable.create((observer: Observer<string>) => {
        observer.next('Primeiro evento da stream');
        // observer.error('Ocorreu um erro');
        observer.complete();
      });

      teste.subscribe(
        (resultado: any) => console.log(resultado),
        (erro: string) => console.log(erro),
        () => console.log('Finalizou')
      );*/
  }

}
