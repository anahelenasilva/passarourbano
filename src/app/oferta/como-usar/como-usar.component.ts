import { OfertasService } from './../../ofertas.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss']
})
export class ComoUsarComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private service: OfertasService) { }

public descricao: string;

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: Params) => {
      this.service.getOndeFicaOfertaPorId(parametros.id)
      .then((descricao) => {
        this.descricao = descricao;
      });
    });
  }
}
