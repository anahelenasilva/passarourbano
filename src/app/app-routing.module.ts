import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { OfertaComponent } from './oferta/oferta.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'diversao', component: DiversaoComponent },
  { path: 'oferta', component: OfertaComponent },
  { path: 'oferta/:id', component: OfertaComponent,
        children: [ { path: '', component: ComoUsarComponent },
                    { path: 'onde-fica', component: OndeFicaComponent },
                    { path: 'como-usar', component: ComoUsarComponent }
                  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
