import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { EstadiasComponent } from './estadias/estadias.component';
import { EventosComponent } from './eventos/eventos.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
  {
    path: 'estadias',
    component: EstadiasComponent,
  },
  {
    path: 'eventos',
    component: EventosComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'contacto',
    component: ContactoComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
