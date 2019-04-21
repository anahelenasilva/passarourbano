import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
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
  private subjectPesquisa: Subject<string> = new Subject<string>();

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
    .pipe(
        debounceTime(1000), // 1 segundo
        distinctUntilChanged(),
        switchMap(valorPesquisa => {
          if (valorPesquisa != null && valorPesquisa.trim() !== '') {
            return this.service.pesquisarOfertas(valorPesquisa);
          }

          return of<Oferta[]>([]);
        }),
        catchError((err: any) => {
          console.log(err);
          return of<Oferta[]>([]);
        })
    );
  }

  public pesquisar(valorPesquisaOferta: string): void {
    /*this.ofertas = this.service.pesquisarOfertas(valorPesquisaOferta);
    this.ofertas.subscribe(
      (ofertas: Oferta[]) => { console.log(ofertas); },
      ((erro: any) => {  }),
      (() => { console.log('Fluxo de eventos completo'); })
    );*/

    this.subjectPesquisa.next(valorPesquisaOferta);
  }

  limparPesquisa() {
    this.subjectPesquisa.next('');
  }
}
