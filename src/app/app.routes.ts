import { Routes } from '@angular/router';
import { Contacto } from './paginas/contacto';
import { Estadias } from './paginas/estadias';
import { Inicio } from './paginas/inicio';

export const routes: Routes = [
  {
    path: '',
    component: Inicio,
    title: 'Lo de Vicente | Alojamiento independiente con pileta en Tandil',
    data: {
      descripcion:
        'Alojamiento independiente para hasta 7 personas en Tandil, con pileta, parrilla, fogón y jardín de uso exclusivo. A 10 minutos del centro y a 2 km del Cerro La Movediza. Consultá por WhatsApp.',
    },
  },
  {
    path: 'estadias',
    component: Estadias,
    title: 'Alojamiento independiente para 7 personas con pileta en Tandil | Lo de Vicente',
    data: {
      descripcion:
        'Alojamiento independiente en Tandil para hasta 7 personas: habitación en planta alta, cocina equipada, 2 baños, wifi, smart TV, aire acondicionado y pileta, parrilla y jardín de uso exclusivo.',
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
