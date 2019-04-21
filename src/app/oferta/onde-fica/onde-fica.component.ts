import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss']
})
export class OndeFicaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: OfertasService) { }

  public descricao: string;

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: Params) => {
      this.service.getComoUsarOfertaPorId(parametros.id)
      .then((descricao) => {
        this.descricao = descricao;
      });
    });
  }

}
