import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FOTOS_EVENTOS } from '../data/galerias';
import { MENSAJES } from '../data/sitio';
import { Galeria } from '../shared/galeria';
import { Icono, NombreIcono } from '../shared/icono';
import { BotonesContacto, LlamadoContacto } from '../shared/llamado-contacto';

@Component({
  selector: 'app-eventos',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, Galeria, Icono, BotonesContacto, LlamadoContacto],
  template: `
    <section class="contenedor grid items-center gap-10 pt-8 pb-16 sm:pt-14 lg:grid-cols-2 lg:gap-16">
      <div>
        <p class="etiqueta"><app-icono nombre="torta" class="size-4" /> Eventos en Tandil</p>
        <h1 class="mt-5 font-display text-4xl leading-[1.08] tracking-tight text-balance text-bosque sm:text-6xl">
          Quincho para eventos de hasta 30 personas
        </h1>
        <p class="mt-6 text-lg leading-relaxed text-pretty text-tinta/75">
          Ese momento tan especial: el primer añito, un bautismo, la comunión, una recibida o simplemente reunirte a
          compartir con familia y amigos. En <strong class="text-tinta">Lo de Vicente</strong> lo hacemos
          inolvidable. Gracias a todos los que nos eligieron y confiaron en nosotros.
        </p>
        <app-botones-contacto class="mt-8" [mensaje]="mensaje" textoWhatsapp="Consultar fecha" />
      </div>
      <div class="grid h-[24rem] grid-cols-2 grid-rows-2 gap-3 sm:h-[32rem] sm:gap-4">
        <div class="relative row-span-2 overflow-hidden rounded-[1.75rem] bg-arena">
          <img ngSrc="evento-mesa-dulce" alt="Mesa dulce de un cumpleaños en el quincho" fill priority sizes="(min-width: 1024px) 25vw, 50vw" class="object-cover" />
        </div>
        <div class="relative overflow-hidden rounded-[1.75rem] bg-arena">
          <img ngSrc="quincho-salon-eventos" alt="Salón del quincho con mesas" fill priority sizes="(min-width: 1024px) 25vw, 50vw" class="object-cover" />
        </div>
        <div class="relative overflow-hidden rounded-[1.75rem] bg-arena">
          <img ngSrc="evento-pileta-verano" alt="Invitados en la pileta durante un evento" fill sizes="(min-width: 1024px) 25vw, 50vw" class="object-cover" />
        </div>
      </div>
    </section>

    <section class="border-y border-tinta/5 bg-white/60">
      <div class="contenedor py-16 sm:py-20">
        <p class="etiqueta">Ideal para</p>
        <ul class="mt-5 flex flex-wrap gap-3">
          @for (ocasion of ocasiones; track ocasion) {
            <li class="rounded-full bg-terracota/10 px-5 py-2.5 font-display text-lg text-terracota-oscuro">{{ ocasion }}</li>
          }
        </ul>

        <h2 class="titulo-seccion mt-14">Qué incluye el quincho</h2>
        <ul class="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          @for (item of servicios; track item.titulo) {
            <li class="flex gap-4">
              <span class="grid size-12 shrink-0 place-items-center rounded-2xl bg-hoja/15 text-bosque">
                <app-icono [nombre]="item.icono" class="size-6" />
              </span>
              <div>
                <h3 class="font-semibold text-tinta">{{ item.titulo }}</h3>
                <p class="mt-0.5 text-sm leading-relaxed text-tinta/65">{{ item.texto }}</p>
              </div>
            </li>
          }
        </ul>
      </div>
    </section>

    <section class="contenedor py-16 sm:py-20">
      <p class="etiqueta">Fotos</p>
      <h2 class="titulo-seccion">Celebraciones en Lo de Vicente</h2>
      <app-galeria class="mt-8 block" [fotos]="fotos" />
    </section>

    <app-llamado-contacto
      titulo="Organicemos tu evento"
      texto="Contanos la fecha, el tipo de evento y la cantidad de invitados. Te recibimos durante todo el año."
      [mensaje]="mensaje"
    />
  `,
})
export class Eventos {
  protected readonly mensaje = MENSAJES.evento;
  protected readonly fotos = FOTOS_EVENTOS;

  protected readonly ocasiones = [
    'Cumpleaños',
    'Primer añito',
    'Bautismos',
    'Comuniones',
    'Recibidas',
    'Reuniones familiares',
    'Encuentros con amigos',
  ];

  protected readonly servicios: { icono: NombreIcono; titulo: string; texto: string }[] = [
    { icono: 'personas', titulo: 'Capacidad para 30 personas', texto: 'Quincho equipado con mesas y sillas.' },
    { icono: 'cocina', titulo: 'Cocina completa', texto: 'Con todos los electrodomésticos, vajilla y mantelería completa.' },
    { icono: 'fuego', titulo: 'Parrilla techada', texto: 'Además de fogón, parrilla, disco y plancheta en el parque.' },
    { icono: 'pileta', titulo: 'Pileta en temporada', texto: 'De noviembre a marzo, para que los chicos (y no tanto) disfruten.' },
    { icono: 'arbol', titulo: 'Espacio verde', texto: 'Bancos, reposeras y sombrillas para disfrutar del jardín.' },
    { icono: 'bano', titulo: 'Dos baños y antebaño', texto: 'Cómodos para todos los invitados.' },
    { icono: 'wifi', titulo: 'Wifi', texto: 'Conexión disponible durante el evento.' },
    { icono: 'cama', titulo: '¿Te querés quedar?', texto: 'Habitación con cama matrimonial y simple, más camas en el comedor.' },
    { icono: 'calendario', titulo: 'Todo el año', texto: 'Te recibimos en cualquier temporada.' },
  ];
}
