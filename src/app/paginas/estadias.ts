import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FOTOS_CABANA, FOTOS_EXTERIOR } from '../data/galerias';
import { MENSAJES } from '../data/sitio';
import { Galeria } from '../shared/galeria';
import { Icono, NombreIcono } from '../shared/icono';
import { BotonesContacto, LlamadoContacto } from '../shared/llamado-contacto';

@Component({
  selector: 'app-estadias',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, Galeria, Icono, BotonesContacto, LlamadoContacto],
  template: `
    <section class="contenedor grid items-center gap-10 pt-8 pb-16 sm:pt-14 lg:grid-cols-2 lg:gap-16">
      <div>
        <p class="etiqueta"><app-icono nombre="casa" class="size-4" /> Alojamiento en Tandil</p>
        <h1 class="mt-5 font-display text-4xl leading-[1.08] tracking-tight text-balance text-bosque sm:text-6xl">
          Cabaña con pileta para hasta 7 personas
        </h1>
        <p class="mt-6 text-lg leading-relaxed text-pretty text-tinta/75">
          ¿Buscás hospedarte en Tandil? Te ofrecemos una cabaña cálida y confortable para turistas y lugareños que
          quieran descansar y disfrutar de las bellezas de nuestra ciudad. Estamos a 2 km del Cerro La Movediza y a 10
          minutos del centro comercial, con privacidad y todo lo necesario para que tu estadía sea inolvidable.
        </p>
        <app-botones-contacto class="mt-8" [mensaje]="mensaje" textoWhatsapp="Consultar fechas" />
      </div>
      <div class="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-arena lg:aspect-[5/6]">
        <img ngSrc="cabana-salon-comedor-camas" alt="Salón comedor de la cabaña con camas nido" fill priority sizes="(min-width: 1024px) 50vw, 100vw" class="object-cover" />
      </div>
    </section>

    <section class="border-y border-tinta/5 bg-white/60">
      <div class="contenedor grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <p class="etiqueta">Distribución</p>
          <h2 class="titulo-seccion">Así es la cabaña</h2>
          <p class="mt-5 leading-relaxed text-tinta/75">
            Dos plantas pensadas para familias y grupos de amigos. Se provee blanquería, abrigo y almohadas.
          </p>
        </div>
        <dl class="grid gap-6 sm:grid-cols-2">
          @for (ambiente of ambientes; track ambiente.titulo) {
            <div class="rounded-3xl bg-crema p-6 ring-1 ring-tinta/5">
              <dt class="flex items-center gap-3 font-semibold text-bosque">
                <app-icono [nombre]="ambiente.icono" class="size-6 text-terracota" />
                {{ ambiente.titulo }}
              </dt>
              <dd class="mt-3 text-sm leading-relaxed text-tinta/75">{{ ambiente.texto }}</dd>
            </div>
          }
        </dl>
      </div>
    </section>

    <section class="contenedor py-16 sm:py-20">
      <p class="etiqueta">Servicios</p>
      <h2 class="titulo-seccion">Qué incluye tu estadía</h2>
      <ul class="mt-8 flex flex-wrap gap-3">
        @for (servicio of servicios; track servicio.texto) {
          <li class="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-tinta/80 shadow-sm ring-1 ring-tinta/5">
            <app-icono [nombre]="servicio.icono" class="size-4.5 text-bosque" />
            {{ servicio.texto }}
          </li>
        }
      </ul>
    </section>

    <section id="fotos" class="contenedor scroll-mt-24 pb-8">
      <p class="etiqueta">Fotos</p>
      <h2 class="titulo-seccion">Adentro de la cabaña</h2>
      <app-galeria class="mt-8 block" [fotos]="fotosCabana" />
    </section>

    <section id="exterior" class="contenedor scroll-mt-24 pt-12 pb-4">
      <h2 class="titulo-seccion">Jardín, pileta y parrilla</h2>
      <app-galeria class="mt-8 block" [fotos]="fotosExterior" />
    </section>

    <app-llamado-contacto
      titulo="Reservá tu escapada a Tandil"
      texto="Contanos las fechas y cuántas personas son. Te respondemos con disponibilidad y precio."
      [mensaje]="mensaje"
    />
  `,
})
export class Estadias {
  protected readonly mensaje = MENSAJES.estadia;
  protected readonly fotosCabana = FOTOS_CABANA;
  protected readonly fotosExterior = FOTOS_EXTERIOR;

  protected readonly ambientes: { icono: NombreIcono; titulo: string; texto: string }[] = [
    {
      icono: 'cama',
      titulo: 'Habitación en planta alta',
      texto: 'Para 3 personas, con cama de dos plazas y sofá cama, smart TV y aire acondicionado frío/calor.',
    },
    {
      icono: 'personas',
      titulo: 'Salón comedor',
      texto: 'Amplia mesa para 8, dos camas nido individuales (4 plazas), smart TV, calefactor y ventilador.',
    },
    {
      icono: 'cocina',
      titulo: 'Cocina equipada',
      texto: 'Cocina y horno a gas, microondas, pava eléctrica, tostadora, freezer, desayunador y vajilla completa.',
    },
    {
      icono: 'bano',
      titulo: '2 baños y antebaño',
      texto: 'Uno de los baños con ducha, más un antebaño cómodo y práctico.',
    },
  ];

  protected readonly servicios: { icono: NombreIcono; texto: string }[] = [
    { icono: 'wifi', texto: 'Wifi gratuito' },
    { icono: 'pileta', texto: 'Pileta (noviembre a marzo)' },
    { icono: 'fuego', texto: 'Parrilla adentro y afuera' },
    { icono: 'fuego', texto: 'Fogón y disco' },
    { icono: 'arbol', texto: 'Espacio verde privado' },
    { icono: 'sol', texto: 'Reposeras y sombrilla' },
    { icono: 'tv', texto: 'Smart TV con streaming' },
    { icono: 'aire', texto: 'A/C frío/calor' },
    { icono: 'auto', texto: 'Entrada para auto compartida' },
    { icono: 'cama', texto: 'Blanquería incluida' },
    { icono: 'calendario', texto: 'Abierto todo el año' },
  ];
}
