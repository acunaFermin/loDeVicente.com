import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SITIO, linkWhatsapp } from '../data/sitio';
import { Icono, IconoWhatsapp, NombreIcono } from '../shared/icono';
import { Mapa } from '../shared/mapa';

@Component({
  selector: 'app-contacto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icono, IconoWhatsapp, Mapa],
  template: `
    <section class="contenedor pt-8 pb-12 sm:pt-14">
      <p class="etiqueta"><app-icono nombre="telefono" class="size-4" /> Contacto</p>
      <h1 class="mt-5 max-w-3xl font-display text-4xl leading-[1.08] tracking-tight text-balance text-bosque sm:text-6xl">
        Escribinos y planificá tu visita a Tandil
      </h1>
      <p class="mt-6 max-w-2xl text-lg leading-relaxed text-tinta/75">
        La forma más rápida de consultar disponibilidad y precios es por WhatsApp. También podés llamarnos o
        escribirnos por mail y redes.
      </p>
    </section>

    <section class="contenedor grid gap-4 pb-16 sm:grid-cols-2 lg:grid-cols-3">
      <a [href]="whatsapp" target="_blank" rel="noopener" class="group flex flex-col justify-between gap-8 rounded-3xl bg-whatsapp p-7 text-white sm:row-span-2">
        <app-icono-whatsapp class="size-10" />
        <div>
          <h2 class="font-display text-3xl">WhatsApp</h2>
          <p class="mt-2 text-white/85">Respondemos rápido. Contanos fechas y cantidad de personas.</p>
          <span class="mt-5 inline-flex items-center gap-2 font-semibold">
            Escribinos <app-icono nombre="flecha" class="size-5 transition group-hover:translate-x-1" />
          </span>
        </div>
      </a>
      @for (canal of canales; track canal.titulo) {
        <a [href]="canal.href" [attr.target]="canal.externo ? '_blank' : null" [attr.rel]="canal.externo ? 'noopener' : null" class="tarjeta-contacto group">
          <span class="grid size-12 shrink-0 place-items-center rounded-2xl bg-hoja/15 text-bosque">
            <app-icono [nombre]="canal.icono" class="size-6" />
          </span>
          <div class="min-w-0">
            <h2 class="text-sm font-medium text-tinta/60">{{ canal.titulo }}</h2>
            <!-- <wbr> permite cortar el email antes de la arroba en pantallas angostas -->
            <p class="mt-0.5 font-semibold text-tinta group-hover:text-terracota">{{ canal.valor }}@if (canal.sufijo) {<wbr />{{ canal.sufijo }}}</p>
          </div>
        </a>
      }
    </section>

    <section class="bg-arena/60">
      <div class="contenedor grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <p class="etiqueta">Dónde encontrarnos</p>
          <h2 class="titulo-seccion">Villa Italia, Tandil</h2>
          <address class="mt-5 text-lg leading-relaxed text-tinta/80 not-italic">
            {{ sitio.direccion.calle }}<br />
            {{ sitio.direccion.entreCalles }}<br />
            {{ sitio.direccion.barrio }}, {{ sitio.direccion.ciudad }}<br />
            {{ sitio.direccion.provincia }}, {{ sitio.direccion.pais }}
          </address>
          <a [href]="sitio.mapaLink" target="_blank" rel="noopener" class="boton boton-secundario mt-8">
            <app-icono nombre="ubicacion" class="size-5" /> Cómo llegar
          </a>
        </div>
        <app-mapa class="aspect-[4/3]" />
      </div>
    </section>

    <section class="contenedor py-16 sm:py-24">
      <div class="mx-auto max-w-3xl text-center">
        <p class="etiqueta justify-center">Nosotros</p>
        <p class="mt-5 font-display text-2xl leading-snug text-bosque sm:text-3xl">
          Somos una familia emprendedora que busca ofrecerte un espacio cálido y confortable para que tu estadía en
          Tandil sea inolvidable. Queremos acompañarte para que puedas conocer mejor esta hermosa ciudad y disfrutar al
          máximo de la experiencia de visitarnos. ¡Vení a conocernos!
        </p>
      </div>
    </section>
  `,
})
export class Contacto {
  protected readonly sitio = SITIO;
  protected readonly whatsapp = linkWhatsapp();

  protected readonly canales: {
    icono: NombreIcono;
    titulo: string;
    valor: string;
    sufijo?: string;
    href: string;
    externo: boolean;
  }[] = [
    { icono: 'telefono', titulo: 'Teléfono', valor: SITIO.telefonoVisible, href: `tel:${SITIO.telefono}`, externo: false },
    {
      icono: 'mail',
      titulo: 'Email',
      valor: SITIO.email.split('@')[0],
      sufijo: '@' + SITIO.email.split('@')[1],
      href: `mailto:${SITIO.email}`,
      externo: false,
    },
    { icono: 'instagram', titulo: 'Instagram', valor: SITIO.instagramUsuario, href: SITIO.instagram, externo: true },
    { icono: 'facebook', titulo: 'Facebook', valor: 'Lo de Vicente Tandil', href: SITIO.facebook, externo: true },
  ];
}
