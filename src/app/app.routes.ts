import { Routes } from '@angular/router';
import { Contacto } from './paginas/contacto';
import { Estadias } from './paginas/estadias';
import { Eventos } from './paginas/eventos';
import { Inicio } from './paginas/inicio';

export const routes: Routes = [
  {
    path: '',
    component: Inicio,
    title: 'Lo de Vicente | Cabaña con pileta y quincho para eventos en Tandil',
    data: {
      descripcion:
        'Cabaña para hasta 7 personas con pileta, parrilla y fogón en Tandil, a 10 minutos del centro. Quincho para eventos de hasta 30 personas. Consultá disponibilidad por WhatsApp.',
    },
  },
  {
    path: 'estadias',
    component: Estadias,
    title: 'Alojamiento en Tandil para 7 personas con pileta | Lo de Vicente',
    data: {
      descripcion:
        'Cabaña en Tandil para hasta 7 personas: habitación en planta alta, cocina equipada, 2 baños, wifi, smart TV, aire acondicionado, pileta, parrilla y jardín privado.',
    },
  },
  {
    path: 'eventos',
    component: Eventos,
    title: 'Quincho para eventos en Tandil hasta 30 personas | Lo de Vicente',
    data: {
      descripcion:
        'Alquiler de quincho en Tandil para cumpleaños, bautismos, comuniones y reuniones de hasta 30 personas. Pileta, parrilla techada, fogón, vajilla y espacio verde.',
    },
  },
  {
    path: 'contacto',
    component: Contacto,
    title: 'Contacto y ubicación | Lo de Vicente, Tandil',
    data: {
      descripcion:
        'Consultá precios y disponibilidad de Lo de Vicente por WhatsApp o teléfono. Estamos en Vicente López 1153, Villa Italia, Tandil.',
    },
  },
  { path: '**', redirectTo: '' },
];
