import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MENSAJES, SITIO, linkWhatsapp } from '../data/sitio';
import { Icono, IconoWhatsapp } from './icono';

/** Botones de WhatsApp y teléfono. */
@Component({
  selector: 'app-botones-contacto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Icono, IconoWhatsapp],
  host: { class: 'flex flex-wrap gap-3' },
  template: `
    <a [href]="whatsapp()" target="_blank" rel="noopener" class="boton boton-whatsapp">
      <app-icono-whatsapp class="size-5" />
      {{ textoWhatsapp() }}
    </a>
    <a [href]="'tel:' + sitio.telefono" class="boton" [class]="claro() ? 'boton-claro' : 'boton-secundario'">
      <app-icono nombre="telefono" class="size-5" />
      Llamar al {{ sitio.telefonoVisible }}
    </a>
  `,
})
export class BotonesContacto {
  readonly mensaje = input<string>(MENSAJES.general);
  readonly textoWhatsapp = input('Consultar por WhatsApp');
  readonly claro = input(false);

  protected readonly sitio = SITIO;
  protected readonly whatsapp = computed(() => linkWhatsapp(this.mensaje()));
}

/** Banda final de llamado a la acción. */
@Component({
  selector: 'app-llamado-contacto',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [BotonesContacto],
  template: `
    <section class="contenedor py-16 sm:py-24">
      <div class="relative overflow-hidden rounded-[2rem] bg-bosque px-6 py-14 text-center text-crema sm:px-16 sm:py-20">
        <div aria-hidden="true" class="absolute -top-24 -right-24 size-72 rounded-full bg-terracota/25 blur-3xl"></div>
        <div aria-hidden="true" class="absolute -bottom-24 -left-24 size-72 rounded-full bg-hoja/30 blur-3xl"></div>
        <div class="relative">
          <h2 class="font-display text-3xl text-balance sm:text-5xl">{{ titulo() }}</h2>
          <p class="mx-auto mt-4 max-w-xl text-lg text-pretty text-crema/80">{{ texto() }}</p>
          <app-botones-contacto class="mt-8 justify-center" [mensaje]="mensaje()" [claro]="true" />
        </div>
      </div>
    </section>
  `,
})
export class LlamadoContacto {
  readonly titulo = input('¿Tenés fechas en mente?');
  readonly texto = input('Escribinos y te respondemos con disponibilidad y precios. Te recibimos durante todo el año.');
  readonly mensaje = input<string>(MENSAJES.general);
}
