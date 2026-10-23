import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { linkWhatsapp } from '../data/sitio';
import { Icono, IconoWhatsapp } from '../shared/icono';

@Component({
  selector: 'app-encabezado',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, RouterLinkActive, Icono, IconoWhatsapp],
  host: { class: 'sticky top-0 z-40 block border-b border-tinta/5 bg-crema/85 backdrop-blur-md' },
  template: `
    <div class="contenedor flex h-16 items-center justify-between gap-4 sm:h-20">
      <a routerLink="/" class="flex items-baseline gap-2 whitespace-nowrap" (click)="abierto.set(false)">
        <span class="font-display text-2xl font-semibold tracking-tight text-bosque sm:text-[1.7rem]">Lo de Vicente</span>
        <span class="hidden text-xs font-medium tracking-[0.2em] text-terracota uppercase lg:inline">Tandil</span>
      </a>

      <nav aria-label="Principal" class="hidden items-center gap-0.5 md:flex lg:gap-1">
        @for (link of links; track link.ruta) {
          <a
            [routerLink]="link.ruta"
            routerLinkActive="text-bosque! after:scale-x-100"
            [routerLinkActiveOptions]="{ exact: true }"
            class="relative px-3 py-2 text-[0.95rem] font-medium text-tinta/70 transition hover:text-bosque after:absolute after:inset-x-3 after:bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-terracota after:transition"
          >
            {{ link.texto }}
          </a>
        }
        <a [href]="whatsapp" target="_blank" rel="noopener" class="boton boton-whatsapp ml-3 py-2.5! text-sm">
          <app-icono-whatsapp class="size-4" />
          Reservar
        </a>
      </nav>

      <button
        type="button"
        class="grid size-11 place-items-center rounded-full text-bosque md:hidden"
        [attr.aria-expanded]="abierto()"
        aria-controls="menu-movil"
        [attr.aria-label]="abierto() ? 'Cerrar menú' : 'Abrir menú'"
        (click)="abierto.update((v) => !v)"
      >
        <app-icono [nombre]="abierto() ? 'cerrar' : 'menu'" class="size-6" />
      </button>
    </div>

    @if (abierto()) {
      <nav id="menu-movil" aria-label="Principal" class="border-t border-tinta/5 bg-crema md:hidden">
        <ul class="contenedor flex flex-col py-3">
          @for (link of links; track link.ruta) {
            <li>
              <a
                [routerLink]="link.ruta"
                routerLinkActive="text-terracota"
                [routerLinkActiveOptions]="{ exact: true }"
                class="block py-3 font-display text-2xl text-bosque"
                (click)="abierto.set(false)"
              >
                {{ link.texto }}
              </a>
            </li>
          }
          <li class="pt-3 pb-2">
            <a [href]="whatsapp" target="_blank" rel="noopener" class="boton boton-whatsapp w-full">
              <app-icono-whatsapp class="size-5" />
              Consultar disponibilidad
            </a>
          </li>
        </ul>
      </nav>
    }
  `,
})
export class Encabezado {
  protected readonly abierto = signal(false);
  protected readonly whatsapp = linkWhatsapp();
  protected readonly links = [
    { ruta: '/', texto: 'Inicio' },
    { ruta: '/estadias', texto: 'Alojamiento' },
    { ruta: '/eventos', texto: 'Eventos' },
    { ruta: '/contacto', texto: 'Contacto' },
  ];
}
