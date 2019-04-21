import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {

    transform(value: string, truncarEm: number, iniciarEm: number): string {
        if (value.length > truncarEm) {
            return value.substr(iniciarEm, truncarEm) + '...';
        }

        return value;
    }

}
