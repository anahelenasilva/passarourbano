import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Observer, Subscription } from 'rxjs';
// import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute,
              private service: OfertasService) { }

  public oferta: Oferta;

  private testeSubscription: Subscription;

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

      let teste = Observable.create((observer: Observer<string>) => {
        observer.next('Primeiro evento da stream');
        // observer.error('Ocorreu um erro');
        observer.complete();
      });

      this.testeSubscription = teste.subscribe(
        (resultado: any) => console.log(resultado),
        (erro: string) => console.log(erro),
        () => console.log('Finalizou')
      );
  }

  ngOnDestroy(): void {
    this.testeSubscription.unsubscribe();
  }

}
