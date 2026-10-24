import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FOTOS_EXTERIOR, FOTOS_INTERIOR } from '../data/galerias';
import { SITIO } from '../data/sitio';
import { Galeria } from '../shared/galeria';
import { Icono, NombreIcono } from '../shared/icono';
import { BotonesContacto, LlamadoContacto } from '../shared/llamado-contacto';
import { Mapa } from '../shared/mapa';

@Component({
  selector: 'app-inicio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, RouterLink, Galeria, Icono, BotonesContacto, LlamadoContacto, Mapa],
  template: `
    <!-- Portada -->
    <section class="contenedor grid items-center gap-10 pt-8 pb-16 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-24">
      <div>
        <p class="etiqueta">
          <app-icono nombre="ubicacion" class="size-4" /> Villa Italia · Tandil
        </p>
        <h1 class="mt-5 font-display text-[2.6rem] leading-[1.05] tracking-tight text-balance text-bosque sm:text-6xl xl:text-7xl">
          Alojamiento temporario con pileta y fogón en <em class="text-terracota">Tandil</em>
        </h1>
        <p class="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-tinta/75">
          Vivienda equipada para <strong class="text-tinta">hasta 6 huéspedes</strong>, ubicada en un predio
          independiente y totalmente perimetrado. Jardín, pileta, parrilla y fogón de uso exclusivo para vos y tu grupo,
          a 10 minutos del centro y a 2 km del Cerro La Movediza.
        </p>
        <app-botones-contacto class="mt-8" />

        <dl class="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-tinta/10 pt-6">
          <div>
            <dt class="text-xs tracking-wide text-tinta/60 uppercase">Huéspedes</dt>
            <dd class="mt-1 font-display text-3xl text-bosque">6<span class="block font-sans text-xs text-tinta/60">como máximo</span></dd>
          </div>
          <div>
            <dt class="text-xs tracking-wide text-tinta/60 uppercase">Baños</dt>
            <dd class="mt-1 font-display text-3xl text-bosque">2<span class="block font-sans text-xs text-tinta/60">+ antebaño</span></dd>
          </div>
          <div>
            <dt class="text-xs tracking-wide text-tinta/60 uppercase">Del centro</dt>
            <dd class="mt-1 font-display text-3xl text-bosque">10<span class="block font-sans text-xs text-tinta/60">minutos</span></dd>
          </div>
        </dl>
      </div>

      <div class="grid h-[26rem] grid-cols-5 grid-rows-2 gap-3 sm:h-[34rem] sm:gap-4">
        <div class="relative col-span-3 row-span-2 overflow-hidden rounded-[1.75rem] bg-arena">
          <img ngSrc="pileta" alt="Pileta de uso exclusivo en Lo de Vicente, Tandil" fill priority sizes="(min-width: 1024px) 30vw, 60vw" class="object-cover" />
        </div>
        <div class="relative col-span-2 overflow-hidden rounded-[1.75rem] bg-arena">
          <img ngSrc="jardin-mesas" alt="Jardín con mesas y bancos" fill priority sizes="(min-width: 1024px) 20vw, 40vw" class="object-cover" />
        </div>
        <div class="relative col-span-2 overflow-hidden rounded-[1.75rem] bg-arena">
          <img ngSrc="salon-comedor-camas" alt="Salón comedor del alojamiento" fill sizes="(min-width: 1024px) 20vw, 40vw" class="object-cover" />
        </div>
      </div>
    </section>

    <!-- Comodidades -->
    <section class="border-y border-tinta/5 bg-white/60">
      <div class="contenedor py-16 sm:py-20">
        <div class="max-w-2xl">
          <p class="etiqueta">Comodidades</p>
          <h2 class="titulo-seccion">Todo lo que necesitás para desconectar</h2>
        </div>
        <ul class="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
          @for (item of comodidades; track item.titulo) {
            <li class="flex gap-4">
              <span class="grid size-12 shrink-0 place-items-center rounded-2xl bg-hoja/15 text-bosque">
                <app-icono [nombre]="item.icono" class="size-6" />
              </span>
              <div>
                <h3 class="font-semibold text-tinta">{{ item.titulo }}</h3>
                <p class="mt-0.5 text-sm text-tinta/65">{{ item.texto }}</p>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>

    <!-- Adentro y afuera -->
    <section class="contenedor py-16 sm:py-24">
      <div class="max-w-2xl">
        <p class="etiqueta">Lo de Vicente</p>
        <h2 class="titulo-seccion">Comodidad adentro, naturaleza afuera</h2>
      </div>
      <div class="mt-10 grid gap-6 md:grid-cols-2">
        @for (tarjeta of tarjetas; track tarjeta.titulo) {
          <a [routerLink]="tarjeta.ruta" [fragment]="tarjeta.fragmento" class="group relative isolate flex min-h-[28rem] flex-col justify-end overflow-hidden rounded-[2rem] p-7 text-white sm:p-9">
            <img [ngSrc]="tarjeta.foto" [alt]="tarjeta.alt" fill sizes="(min-width: 768px) 50vw, 100vw" class="-z-10 object-cover transition duration-700 group-hover:scale-105" />
            <div aria-hidden="true" class="absolute inset-0 -z-10 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>
            <p class="text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">{{ tarjeta.etiqueta }}</p>
            <h3 class="mt-2 font-display text-3xl sm:text-4xl">{{ tarjeta.titulo }}</h3>
            <p class="mt-3 max-w-md text-white/85">{{ tarjeta.texto }}</p>
            <span class="mt-5 inline-flex items-center gap-2 font-semibold">
              {{ tarjeta.accion }}
              <app-icono nombre="flecha" class="size-5 transition group-hover:translate-x-1" />
            </span>
          </a>
        }
      </div>
    </section>

    <!-- Galería -->
    <section class="contenedor pb-16 sm:pb-24">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <div class="max-w-2xl">
          <p class="etiqueta">Galería</p>
          <h2 class="titulo-seccion">Conocé el alojamiento</h2>
        </div>
        <a routerLink="/estadias" fragment="fotos" class="inline-flex items-center gap-2 font-semibold text-bosque hover:text-terracota">
          Ver todas las fotos <app-icono nombre="flecha" class="size-5" />
        </a>
      </div>
      <app-galeria class="mt-8 block" [fotos]="destacadas" [mosaico]="true" />
    </section>

    <!-- Ubicación -->
    <section class="bg-arena/60">
      <div class="contenedor grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <p class="etiqueta">Ubicación</p>
          <h2 class="titulo-seccion">Un barrio tranquilo, con todo cerca</h2>
          <p class="mt-5 text-lg leading-relaxed text-tinta/75">
            Estamos en Villa Italia, una de las zonas más tranquilas y seguras de Tandil. El barrio tiene un centro
            comercial muy completo, con negocios de todo tipo y propuestas gastronómicas a pocos pasos. Si preferís
            quedarte a descansar, tenés todo lo necesario sin moverte casi nada.
          </p>
          <ul class="mt-6 space-y-4 text-tinta/80">
            @for (item of barrio; track item.texto) {
              <li class="flex items-start gap-3">
                <app-icono [nombre]="item.icono" class="mt-0.5 size-5 shrink-0 text-terracota" />
                <span>{{ item.texto }}</span>
              </li>
            }
            <li class="flex items-start gap-3">
              <app-icono nombre="ubicacion" class="mt-0.5 size-5 shrink-0 text-terracota" />
              <span>{{ sitio.direccion.calle }}, entre Magallanes y Maritorena</span>
            </li>
          </ul>
          <a [href]="sitio.mapaLink" target="_blank" rel="noopener" class="boton boton-secundario mt-8">
            <app-icono nombre="ubicacion" class="size-5" /> Abrir en Google Maps
          </a>
        </div>
        <app-mapa class="aspect-[4/3] lg:aspect-square" />
      </div>
    </section>

    <!-- Nosotros -->
    <section class="contenedor grid items-center gap-10 py-16 sm:py-24 md:grid-cols-[0.8fr_1fr] md:gap-16">
      <div class="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-arena">
        <img ngSrc="cartel-lo-de-vicente" alt="Cartel de Lo de Vicente en el jardín" fill sizes="(min-width: 768px) 40vw, 100vw" class="object-cover" />
      </div>
      <div>
        <p class="etiqueta">Nosotros</p>
        <blockquote class="mt-4 font-display text-2xl leading-snug text-bosque sm:text-[2rem]">
          “Somos una familia emprendedora que busca ofrecerte un espacio cálido y confortable para que tu estadía en
          Tandil sea inolvidable.”
        </blockquote>
        <p class="mt-6 text-lg leading-relaxed text-tinta/75">
          Queremos acompañarte para que conozcas mejor esta hermosa ciudad y disfrutes al máximo de la experiencia de
          visitarnos. ¡Vení a conocernos!
        </p>
      </div>
    </section>

    <app-llamado-contacto />
  `,
})
export class Inicio {
  protected readonly sitio = SITIO;

  // 9 fotos para el mosaico (la primera va destacada).
  protected readonly destacadas = [
    'pileta',
    'salon-comedor-camas',
    'cocina-equipada',
    'habitacion-cama-doble',
    'patio-parque',
    'camas-nido',
    'patio-noche-luces',
    'bano-ducha',
    'fogon-asado',
  ].map((id) => [...FOTOS_EXTERIOR, ...FOTOS_INTERIOR].find((foto) => foto.id === id)!);

  protected readonly barrio: { icono: NombreIcono; texto: string }[] = [
    {
      icono: 'arbol',
      texto:
        'Una senda peatonal con juegos para chicos te lleva hasta el Cerro La Movediza: una caminata muy agradable de 30 a 40 minutos, entre árboles y césped.',
    },
    {
      icono: 'cocina',
      texto:
        'Supermercado Carrefour a 9 cuadras, además de minimercados, autoservicios, verdulerías y carnicerías del barrio.',
    },
    {
      icono: 'auto',
      texto: 'Pasan dos líneas de colectivo que te llevan a distintos puntos de la ciudad, ideal si venís sin auto.',
    },
  ];

  protected readonly comodidades: { icono: NombreIcono; titulo: string; texto: string }[] = [
    { icono: 'casa', titulo: 'Independiente', texto: 'Todo de uso exclusivo, en predio perimetrado' },
    { icono: 'pileta', titulo: 'Pileta exclusiva', texto: 'De noviembre a marzo, de 11 a 20 h' },
    { icono: 'fuego', titulo: 'Parrilla y fogón', texto: 'Al aire libre, para asados en el jardín' },
    { icono: 'arbol', titulo: 'Jardín privado', texto: 'Espacio verde con mesas, sillones y sombrilla' },
    { icono: 'wifi', titulo: 'Wifi gratis', texto: 'Conexión en todo el alojamiento' },
    { icono: 'tv', titulo: 'Smart TV', texto: 'En habitación y comedor' },
    { icono: 'aire', titulo: 'Aire frío / calor', texto: 'En habitación. En el comedor ventilador de pie y calefactor' },
    { icono: 'cocina', titulo: 'Cocina independiente y equipada', texto: 'Heladera, anafe, microondas y vajilla' },
    { icono: 'auto', titulo: 'Cochera', texto: 'Compartida, para motos o un vehículo' },
  ];

  protected readonly tarjetas = [
    {
      ruta: '/estadias',
      fragmento: 'fotos',
      foto: 'comedor-mesa',
      alt: 'Comedor del alojamiento con mesa y camas',
      etiqueta: 'Adentro',
      titulo: 'Para 6 huéspedes',
      texto: 'Habitación en planta alta, comedor con camas nido, cocina completa y dos baños.',
      accion: 'Ver el alojamiento',
    },
    {
      ruta: '/estadias',
      fragmento: 'exterior',
      foto: 'patio-parque',
      alt: 'Jardín de uso exclusivo del alojamiento',
      etiqueta: 'Afuera',
      titulo: 'Jardín, pileta y fogón',
      texto: 'Todo de uso exclusivo: pileta en temporada, parrilla, fogón, mesas y sillones al aire libre.',
      accion: 'Ver el jardín',
    },
  ];
}
