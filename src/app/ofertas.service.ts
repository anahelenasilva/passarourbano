import { Oferta } from './shared/oferta.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OfertasService {

    protected url = 'http://localhost:3000';

    constructor(private http: Http) {}

    public getOfertas(): Promise<Array<Oferta>> {
        return this.http.get(`${this.url}/ofertas`)
                        .toPromise()
                        .then((resposta: any) => resposta.json());
    }

    public getOfertasComDestaque(): Promise<Array<Oferta>> {
        return this.http.get(`${this.url}/ofertas?destaque=true`)
                        .toPromise()
                        .then((resposta: any) => resposta.json());
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${this.url}/ofertas?categoria=${categoria}`)
                        .toPromise()
                        .then((resposta: any) => resposta.json());
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${this.url}/ofertas?id[]=${id}`)
                        .toPromise()
                        .then((resposta: any) => resposta.json().shift());
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${this.url}/como-usar?id[]=${id}`)
        .toPromise()
        .then((resposta: any) => {
            const comoUsar = resposta.json().shift();
            return comoUsar.descricao;
        });
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${this.url}/onde-fica?id[]=${id}`)
        .toPromise()
        .then((resposta: any) => {
            const ondeFica = resposta.json().shift();
            return ondeFica.descricao;
        });
    }
}
