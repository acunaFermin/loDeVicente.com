export const SITIO = {
  nombre: 'Lo de Vicente',
  url: 'https://lodevicente.com',
  telefono: '+542494632892',
  telefonoVisible: '249 463-2892',
  email: 'tandil.lodevicente@gmail.com',
  whatsappNumero: '542494632892',
  instagram: 'https://www.instagram.com/tandil.lodevicente',
  instagramUsuario: '@tandil.lodevicente',
  facebook: 'https://www.facebook.com/lodevicente.eventos.alojamiento.tandil',
  direccion: {
    calle: 'Vicente López 1153',
    entreCalles: 'Entre Magallanes y Maritorena',
    barrio: 'Villa Italia',
    ciudad: 'Tandil',
    provincia: 'Buenos Aires',
    pais: 'Argentina',
  },
  mapaEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3173.656666116222!2d-59.15255664897058!3d-37.30327017974904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959121995259b891%3A0x22cfda9a02ae72c2!2sLo%20de%20Vicente%20-%20Hospedaje%20Estad%C3%ADas%20y%20Eventos!5e0!3m2!1ses!2sar!4v1624190984200!5m2!1ses!2sar',
  mapaLink: 'https://www.google.com/maps/search/?api=1&query=Lo+de+Vicente+Hospedaje+Estadias+y+Eventos+Tandil',
} as const;

export const MENSAJES = {
  general: '¡Hola! Quisiera consultar por precios y disponibilidad. ¡Muchas gracias!',
  estadia: '¡Hola! Quisiera consultar disponibilidad y precio de la cabaña para estas fechas: ',
} as const;

export function linkWhatsapp(mensaje: string = MENSAJES.general): string {
  return `https://wa.me/${SITIO.whatsappNumero}?text=${encodeURIComponent(mensaje)}`;
}
