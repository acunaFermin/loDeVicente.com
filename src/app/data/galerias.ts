import { FotoId } from './fotos';

export interface Foto {
  id: FotoId;
  alt: string;
  desc?: string;
}

export const FOTOS_CABANA: Foto[] = [
  {
    id: 'cabana-salon-comedor-camas',
    alt: 'Salón comedor de la cabaña con camas nido y smart TV',
    desc: 'Nuestro salón cuenta con smart TV, para que disfrutes del contenido que prefieras.',
  },
  {
    id: 'cabana-mesa-comedor',
    alt: 'Mesa del comedor para 8 personas',
    desc: 'Amplia mesa con 8 sillas. Calefactor y ventilador.',
  },
  {
    id: 'cabana-cocina-equipada',
    alt: 'Cocina equipada con amplia mesada',
    desc: 'Cocina totalmente equipada: pava eléctrica, microondas, equipo de música y vajilla completa.',
  },
  {
    id: 'cabana-cocina-horno-microondas',
    alt: 'Cocina y horno a gas con microondas',
    desc: 'Cocina y horno a gas, tablas de madera y todos los elementos de cocina.',
  },
  { id: 'cabana-desayunador-cocina', alt: 'Desayunador en la cocina', desc: 'Desayunador en la cocina.' },
  {
    id: 'cabana-camas-nido',
    alt: 'Camas nido en el salón de la cabaña',
    desc: '4 camas (2 camas nido) muy cómodas y fáciles de armar. Incluye blanquería, abrigo y almohadas.',
  },
  {
    id: 'cabana-habitacion-cama-doble',
    alt: 'Habitación con cama de dos plazas en planta alta',
    desc: 'Cama de dos plazas en la planta alta.',
  },
  { id: 'cabana-sofa-cama', alt: 'Sofá cama en la habitación de planta alta', desc: 'Sofá cama en la habitación de arriba.' },
  { id: 'cabana-habitacion-smart-tv', alt: 'Smart TV en la habitación', desc: 'Smart TV en la habitación de arriba.' },
  { id: 'cabana-bano-ducha', alt: 'Baño con ducha', desc: 'Dos baños, uno con ducha.' },
  { id: 'cabana-antebano', alt: 'Antebaño con espejo y lavatorio', desc: 'Antebaño cómodo y práctico.' },
  { id: 'exterior-aire-acondicionado', alt: 'Aire acondicionado frío calor', desc: 'Aire acondicionado frío/calor.' },
];

export const FOTOS_EXTERIOR: Foto[] = [
  { id: 'cabana-pileta', alt: 'Pileta de la cabaña con sillones en el jardín', desc: 'Pileta en temporada (noviembre a marzo).' },
  {
    id: 'cabana-jardin-mesas',
    alt: 'Jardín con mesas y bancos a la sombra',
    desc: 'Mesas y bancos, reposeras, sombrilla y sombra natural.',
  },
  { id: 'cabana-parrilla-exterior', alt: 'Parrilla exterior de ladrillo', desc: 'Parrilla afuera… y también adentro.' },
  { id: 'cabana-asado-parrilla', alt: 'Asado en la parrilla', desc: 'Si llueve, no te perdés el asadito.' },
  { id: 'exterior-jardin-parque', alt: 'Parque verde frente a la cabaña', desc: 'Espacio verde de uso privado.' },
  { id: 'exterior-frente-cabana', alt: 'Frente de la cabaña con limonero', desc: 'El frente de la cabaña.' },
  { id: 'exterior-pileta-verano', alt: 'Pileta con colchoneta inflable', desc: 'Días de pileta en verano.' },
  { id: 'exterior-reposeras-jardin', alt: 'Reposeras en el jardín', desc: 'Reposeras para disfrutar del sol.' },
  { id: 'exterior-sillones-jardin', alt: 'Sillones y reposeras en el parque', desc: 'Rincones para descansar al aire libre.' },
  { id: 'exterior-sombrilla-jardin', alt: 'Mesa con sombrilla en el jardín', desc: 'Mesa con sombrilla.' },
  { id: 'exterior-metegol', alt: 'Metegol en el jardín', desc: 'Metegol para los más chicos (y los grandes).' },
  { id: 'quincho-fogon', alt: 'Fogón de ladrillo en el parque', desc: 'Fogón y disco para las noches.' },
];

export const FOTOS_EVENTOS: Foto[] = [
  { id: 'quincho-salon-eventos', alt: 'Salón del quincho Lo de Vicente', desc: 'Quincho con capacidad para 30 personas.' },
  { id: 'evento-quincho-con-invitados', alt: 'Reunión familiar en el quincho', desc: 'Reuniones con familia y amigos.' },
  { id: 'evento-mesa-dulce', alt: 'Mesa dulce de cumpleaños infantil', desc: 'Cumpleaños infantiles.' },
  { id: 'evento-bautismo-torta', alt: 'Torta de bautismo y primer añito', desc: 'Bautismos y primer añito.' },
  { id: 'quincho-mesas-sillas', alt: 'Mesas y sillas del quincho', desc: 'Vajilla y mantelería completa.' },
  { id: 'evento-cumpleanos-infantil', alt: 'Festejo de cumpleaños infantil en el quincho' },
  { id: 'evento-pileta-chicos', alt: 'Chicos jugando en la pileta durante un evento', desc: 'Pileta en temporada.' },
  { id: 'quincho-mesa-larga', alt: 'Mesa larga del quincho con sillas de madera' },
  { id: 'evento-animacion-infantil', alt: 'Animación infantil en un cumpleaños' },
  { id: 'evento-cumpleanos-decoracion', alt: 'Decoración de cumpleaños en el quincho' },
  { id: 'quincho-salon-cerrado', alt: 'Salón cerrado del quincho' },
  { id: 'evento-cumpleanos-velas', alt: 'Soplando las velas de cumpleaños' },
  { id: 'evento-pileta-verano', alt: 'Familia disfrutando la pileta en verano' },
  { id: 'quincho-iluminado', alt: 'Quincho iluminado de noche' },
  { id: 'evento-fogon-noche', alt: 'Fogón encendido de noche en el parque' },
  { id: 'quincho-ventilador', alt: 'Quincho con ventilador y ventanales' },
  { id: 'quincho-freezer', alt: 'Freezer disponible en el quincho' },
  { id: 'evento-bautismo', alt: 'Celebración de bautismo' },
];
