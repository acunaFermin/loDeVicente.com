import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { linkWhatsapp } from './data/sitio';
import { Encabezado } from './layout/encabezado';
import { Pie } from './layout/pie';
import { IconoWhatsapp } from './shared/icono';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, Encabezado, Pie, IconoWhatsapp],
  template: `
    <a href="#contenido" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">
      Saltar al contenido
    </a>
    <app-encabezado />
    <main id="contenido">
      <router-outlet />
    </main>
    <app-pie />

    <a
      [href]="whatsapp"
      target="_blank"
      rel="noopener"
      aria-label="Escribinos por WhatsApp"
      class="fixed right-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/20 transition hover:scale-105 sm:right-6 sm:bottom-6 sm:size-16"
    >
      <app-icono-whatsapp class="size-7 sm:size-8" />
    </a>
  `,
})
export class App {
  protected readonly whatsapp = linkWhatsapp();
}
