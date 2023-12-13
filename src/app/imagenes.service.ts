import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ImagenesService {
  rutaEstadias: string = './assets/img/img-estadias/';
  rutaEventos: string = './assets/img/img-eventos/';

  private getImagesPath(){
    const width = window.innerWidth;

    if(width < 500){
      return './assets/img/img-inicio/movil';
    }

    return './assets/img/img-inicio';
  }

  imgInicio = [
    {
      img: `${this.getImagesPath()}/salon_camas.jpg`,
      desc: 'Nuestro salón cuenta con smart tv, donde podrás disfrutar de contenido de tu preferencia.',
      alt: 'salon_camas.jpg',
    },
    {
      img: `${this.getImagesPath()}/mesas_salon.jpg`,
      desc: 'El salón comedor cuenta con una amplia mesa con 8 sillas. Cuenta con calefator y ventilador.',
      alt: 'mesas_salon.jpg',
    },
    {
      img: `${this.getImagesPath()}/mesa-cocina.jpg`,
      desc: 'Desayunador en la cocina',
      alt: 'mesa-cocina.jpg',
    },
    {
      img: `${this.getImagesPath()}/mesada-cocina.jpg`,
      desc: 'Cocina totalmente equipada, con amplia mesada. Cuenta con pava eléctrica, microondas, equipo de música. Vajilla completa.',
      alt: 'mesada-cocina.jpg',
    },
    {
      img: `${this.getImagesPath()}/mesada-microondas.jpg`,
      desc: 'Cocina y horno a gas. Cuenta con tablas de madera, y elementos varios de cocina.',
      alt: 'mesada-microondas.jpg',
    },
    {
      img: `${this.getImagesPath()}/parrilla.jpg`,
      desc: 'La cocina cuenta con una parrilla interna, con lo que se puede cocinar a las brazas los días de frío o de lluvia.',
      alt: 'parrilla.jpg',
    },
    {
      img: `${this.getImagesPath()}/pileta_vereda.jpg`,
      desc: 'Podrás disfrutar de nuestra pileta en verano.',
      alt: 'pileta_vereda.jpg',
    },
    {
      img: `${this.getImagesPath()}/jardin_mesas.jpg`,
      desc: 'El jardin cuenta con un juego de mesas y bancos, reposeras, parrilla, sombrilla y sombra natural.',
      alt: 'jardin_mesas.jpg',
    },
    {
      img: `${this.getImagesPath()}/parrilla-afuera.jpg`,
      desc: 'El jardín cuenta con amplio fogón, con parrilla y asador, y elementos varios como atizador y palita.',
      alt: 'parrilla-afuera.jpg',
    },
    {
      img: `${this.getImagesPath()}/antebaño-espejo.jpg`,
      desc: 'Contamos con antebaño muy cómodo y práctico.',
      alt: 'antebaño-espejo.jpg',
    },
    {
      img: `${this.getImagesPath()}/baño-ducha.jpg`,
      desc: 'Contamos con dos baños, uno con ducha.',
      alt: 'baño-ducha.jpg',
    },
    {
      img: `${this.getImagesPath()}/camas_nido.jpg`,
      desc: 'Contamos con 4 camas (2 camas nido) muy comfortables y comodas. Las camas inferiores tienen rueditas y son muy faciles de armar. Se provee la blanqueria, abrigo y almohadas.',
      alt: 'camas_nido.jpg',
    },
    {
      img: `${this.getImagesPath()}/cama-dos-plazas.jpg`,
      desc: 'Cama de dos plazas en la planta alta',
      alt: 'cama-dos-plazas.jpg',
    },
    {
      img: `${this.getImagesPath()}/sofa-cama-arriba.jpg`,
      desc: 'La habitación de arriba cuenta con un sofa cama.',
      alt: 'sofa-cama-arriba.jpg',
    },
    {
      img: `${this.getImagesPath()}/tele-arriba.jpg`,
      desc: 'Smart tv en la habitación de arriba.',
      alt: 'tele-arriba.jpg',
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
