import { Oferta } from './shared/oferta.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable()
export class OfertasService {

    protected url = 'http://localhost:3000';

    constructor(private http: Http) {}

    public getOfertas(): Promise<Array<Oferta>> {
        return this.http.get(`${this.url}/ofertas`)
                        .toPromise()
                        .then((resposta: Response) => resposta.json());
    }

    public getOfertasComDestaque(): Promise<Array<Oferta>> {
        return this.http.get(`${this.url}/ofertas?destaque=true`)
                        .toPromise()
                        .then((resposta: Response) => resposta.json());
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${this.url}/ofertas?categoria=${categoria}`)
                        .toPromise()
                        .then((resposta: Response) => resposta.json());
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${this.url}/ofertas?id[]=${id}`)
                        .toPromise()
                        .then((resposta: Response) => resposta.json().shift());
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${this.url}/como-usar?id[]=${id}`)
        .toPromise()
        .then((resposta: Response) => {
            const comoUsar = resposta.json().shift();
            return comoUsar.descricao;
        });
    }

    public getOndeFicaOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${this.url}/onde-fica?id[]=${id}`)
        .toPromise()
        .then((resposta: Response) => {
            const ondeFica = resposta.json().shift();
            return ondeFica.descricao;
        });
    }

    public pesquisarOfertas(valor: string): Observable<Oferta[]> {
        return this.http.get(`${this.url}/ofertas?descricao_oferta_like=${valor}`)
        .pipe(
                map((resposta: Response) => resposta.json()),
                retry(10)
             );
    }
}
