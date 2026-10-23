import { FotoId } from './fotos';

export interface Foto {
  id: FotoId;
  alt: string;
  desc?: string;
}

export const FOTOS_CABANA: Foto[] = [
  {
    id: 'salon-comedor-camas',
    alt: 'Salón comedor de la cabaña con camas, mesa y smart TV',
    desc: 'Amplio salón comedor con smart TV, camas y mesa para todo el grupo.',
  },
  { id: 'comedor-mesa', alt: 'Mesa del comedor con sillas de madera', desc: 'Mesa del comedor para compartir.' },
  { id: 'cocina-equipada', alt: 'Cocina equipada con heladera y desayunador', desc: 'Cocina totalmente equipada con heladera y desayunador.' },
  {
    id: 'cocina-anafe-horno',
    alt: 'Cocina con anafe, horno y pava eléctrica',
    desc: 'Cocina y horno a gas, pava eléctrica y todos los elementos de cocina.',
  },
  { id: 'cocina-desayunador', alt: 'Barra desayunador con banquetas', desc: 'Barra desayunador con banquetas.' },
  {
    id: 'habitacion-cama-doble',
    alt: 'Habitación con cama de dos plazas y aire acondicionado',
    desc: 'Habitación con cama de dos plazas y aire acondicionado frío/calor.',
  },
  { id: 'habitacion-smart-tv', alt: 'Habitación con smart TV y cómoda', desc: 'Smart TV en la habitación.' },
  { id: 'habitacion-aire-acondicionado', alt: 'Cama de dos plazas con luces de lectura', desc: 'Luces de lectura a ambos lados de la cama.' },
  {
    id: 'camas-nido',
    alt: 'Camas nido en el salón de la cabaña',
    desc: 'Camas nido muy cómodas y fáciles de armar. Incluye blanquería, abrigo y almohadas.',
  },
  { id: 'living-smart-tv', alt: 'Living con smart TV y sillón', desc: 'Living con smart TV y sillón.' },
  { id: 'comedor-mesa-larga', alt: 'Mesa larga del comedor con vista a la cocina' },
  { id: 'comedor-smart-tv', alt: 'Comedor con smart TV y ventilador' },
  { id: 'comedor-ventanal', alt: 'Comedor con ventanal y calefactor', desc: 'Comedor luminoso con calefactor.' },
  { id: 'pasaplatos', alt: 'Ambiente interior de la cabaña con ventana' },
  { id: 'bano-ducha', alt: 'Baño con ducha', desc: 'Baño con ducha.' },
  { id: 'bano', alt: 'Segundo baño de la cabaña', desc: 'Dos baños completos.' },
  { id: 'antebano-lavatorio', alt: 'Antebaño con lavatorio y espejo', desc: 'Antebaño cómodo y práctico.' },
  { id: 'antebano-escalera', alt: 'Lavatorio de madera junto a la escalera' },
  { id: 'ventana-al-jardin', alt: 'Ventana con vista al jardín', desc: 'Vista al jardín desde adentro.' },
];

export const FOTOS_EXTERIOR: Foto[] = [
  { id: 'pileta', alt: 'Pileta de la cabaña con sombrilla y jardín', desc: 'Pileta en temporada (noviembre a marzo).' },
  {
    id: 'patio-parque',
    alt: 'Parque con césped, mesas y sombrilla',
    desc: 'Espacio verde de uso privado con mesas y sombrilla.',
  },
  { id: 'jardin-mesas', alt: 'Mesas y bancos de madera en el jardín', desc: 'Mesas y bancos para disfrutar al aire libre.' },
  { id: 'jardin-sillones', alt: 'Sillones en el jardín', desc: 'Rincones para descansar al aire libre.' },
  { id: 'pileta-sombrilla', alt: 'Pileta con sombrilla y mesa', desc: 'Sombrilla y mesa junto a la pileta.' },
  { id: 'patio-noche-luces', alt: 'Patio iluminado de noche', desc: 'El patio de noche, con luces.' },
  { id: 'jardin-limonero-mesas', alt: 'Mesas bajo el limonero', desc: 'Sombra natural bajo el limonero.' },
  { id: 'jardin-noche', alt: 'Jardín con guirnalda de luces de noche', desc: 'Noches de verano en el jardín.' },
  { id: 'cartel-lo-de-vicente', alt: 'Cartel de madera de Lo de Vicente en el jardín' },
  { id: 'garage', alt: 'Garage techado', desc: 'Garage techado para el auto.' },
];
