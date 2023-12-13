import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagenesService {
  rutaEstadias: string = './assets/img/img-estadias/';
  rutaEventos: string = './assets/img/img-eventos/';

    imgInicio = [
    {
      img: './assets/img/img-inicio/camas_nido.jpg',
      desc: 'Cocina equipada con vajilla completa, cocina, parrilla, microondas, pava eléctrica, tostadora y freezer.',
      alt: 'Lo de Vicente - cocina completamente equipada',
    },
    {
      img: './assets/img/img-inicio/jardin_mesas.jpg',
      desc: 'Durante la temporada de verano, podes usar la pileta. Un tanque australiano de 5 metros de diametro y 80cm de profundidad.',
      alt: 'Lo de Vicente - pileta',
    },
    {
      img: './assets/img/img-inicio/mesas_salon.jpg',
      desc: 'Jardín para disfrutar del aire fresco, con reposeras y mesas para el mate. Lo de Vicente esta ubicado en una zona tranquila de la ciudad.',
      alt: 'Lo de Vicente - jardin al aire libre',
    },
    {
      img: './assets/img/img-inicio/parrilla.jpg',
      desc: 'Jardín para disfrutar del aire fresco, con reposeras y mesas para el mate. Lo de Vicente esta ubicado en una zona tranquila de la ciudad.',
      alt: 'Lo de Vicente - jardin al aire libre',
    },
    {
      img: './assets/img/img-inicio/pileta_vereda.jpg',
      desc: 'Jardín para disfrutar del aire fresco, con reposeras y mesas para el mate. Lo de Vicente esta ubicado en una zona tranquila de la ciudad.',
      alt: 'Lo de Vicente - jardin al aire libre',
    },
    {
      img: './assets/img/img-inicio/salon_camas.jpg',
      desc: 'Jardín para disfrutar del aire fresco, con reposeras y mesas para el mate. Lo de Vicente esta ubicado en una zona tranquila de la ciudad.',
      alt: 'Lo de Vicente - jardin al aire libre',
    },
  ];

  imgEstadias = [
    'cocina.png',
    'jardin.png',
    'piletax.jpeg',
    'repos.jpeg',
    'fulbito.jpeg',
    'reposerassombrilla.png',
    'room.jpg',
    'sillones.jpeg',
    'ducha.jpg',
    'antebano.png',
    'aire.jpg',
    'xama.png',
    'repos2.jpeg',
    'frente-jardin.jpeg',
  ];

  imgEventos = [
    'celebraciones/bautismo-1.jpeg',
    'celebraciones/bautismo-2.jpeg',
    'celebraciones/cumple-4-sub-tobias.jpeg',
    'celebraciones/cumple-4-tobias-torta.jpeg',
    'celebraciones/cumple-4-tobias.jpeg',
    '10ventilador.jpg',
    '2fogon.jpg',
    '3freezer.jpg',
    '4mesa.jpg',
    '4mesa2.jpg',
    '5mesas sillas.jpg',
    '9Salon cerrado.jpg',
    '6mesita 2.jpg',
    '8salón.jpg',
    'celebraciones/cumple-2.jpg',
    'celebraciones/pileta-chicos.jpg',
    'celebraciones/quincho-gente.jpg',
    'celebraciones/mini-mouse.jpeg',
    'celebraciones/pileta-chicos-2.jpeg',
  ];

  constructor() {}
}
