import { Oferta } from './shared/oferta.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OfertasService {

    protected url = 'http://localhost:3000/ofertas';

    constructor(private http: Http) {}

    public getOfertas(): Promise<Array<Oferta>> {
        return this.http.get(this.url)
                        .toPromise()
                        .then((resposta: any) => resposta.json());
    }

    public getOfertasComDestaque(): Promise<Array<Oferta>> {
        return this.http.get(`${this.url}?destaque=true`)
                        .toPromise()
                        .then((resposta: any) => resposta.json());
    }
}
