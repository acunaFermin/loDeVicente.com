import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITIO, linkWhatsapp } from '../data/sitio';
import { Icono, IconoWhatsapp } from '../shared/icono';

@Component({
  selector: 'app-pie',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, Icono, IconoWhatsapp],
  host: { class: 'block bg-bosque-oscuro text-crema/80' },
  template: `
    <div class="contenedor grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
      <div>
        <img src="/img/lo-de-vicente-logo-linea.webp" alt="Lo de Vicente - Estadías en Tandil" width="640" height="328" class="h-auto w-44" loading="lazy" />
        <p class="mt-5 max-w-xs text-sm leading-relaxed">
          Somos una familia emprendedora que busca ofrecerte un espacio cálido y confortable para que tu estadía en
          Tandil sea inolvidable.
        </p>
      </div>

      <div>
        <h2 class="titulo-pie">Explorar</h2>
        <ul class="space-y-2.5 text-sm">
          <li><a routerLink="/" class="link-pie">Inicio</a></li>
          <li><a routerLink="/estadias" class="link-pie">Alojamiento en Tandil</a></li>
          <li><a routerLink="/contacto" class="link-pie">Contacto y ubicación</a></li>
        </ul>
      </div>

      <div>
        <h2 class="titulo-pie">Dónde estamos</h2>
        <address class="text-sm leading-relaxed not-italic">
          {{ sitio.direccion.calle }}<br />
          {{ sitio.direccion.entreCalles }}<br />
          {{ sitio.direccion.barrio }}, {{ sitio.direccion.ciudad }}<br />
          {{ sitio.direccion.provincia }}, {{ sitio.direccion.pais }}
        </address>
        <a [href]="sitio.mapaLink" target="_blank" rel="noopener" class="link-pie mt-3 inline-flex items-center gap-1.5 text-sm">
          <app-icono nombre="ubicacion" class="size-4" /> Cómo llegar
        </a>
      </div>

      <div>
        <h2 class="titulo-pie">Contacto</h2>
        <ul class="space-y-2.5 text-sm">
          <li>
            <a [href]="whatsapp" target="_blank" rel="noopener" class="link-pie inline-flex items-center gap-2">
              <app-icono-whatsapp class="size-4" /> WhatsApp
            </a>
          </li>
          <li>
            <a [href]="'tel:' + sitio.telefono" class="link-pie inline-flex items-center gap-2">
              <app-icono nombre="telefono" class="size-4" /> {{ sitio.telefonoVisible }}
            </a>
          </li>
          <li>
            <a [href]="'mailto:' + sitio.email" class="link-pie inline-flex items-center gap-2 break-all">
              <app-icono nombre="mail" class="size-4" /> {{ sitio.email }}
            </a>
          </li>
          <li>
            <a [href]="sitio.instagram" target="_blank" rel="noopener" class="link-pie inline-flex items-center gap-2">
              <app-icono nombre="instagram" class="size-4" /> Instagram
            </a>
          </li>
          <li>
            <a [href]="sitio.facebook" target="_blank" rel="noopener" class="link-pie inline-flex items-center gap-2">
              <app-icono nombre="facebook" class="size-4" /> Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-crema/10">
      <p class="contenedor py-6 text-xs text-crema/50">
        © {{ anio }} Lo de Vicente · Alojamiento en Tandil, Buenos Aires.
      </p>
    </div>
  `,
  styles: `
    .titulo-pie {
      margin-bottom: 1rem;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: var(--color-crema);
    }
    .link-pie {
      transition: color 0.2s;
    }
    .link-pie:hover {
      color: white;
    }
  `,
})
export class Pie {
  protected readonly sitio = SITIO;
  protected readonly whatsapp = linkWhatsapp();
  protected readonly anio = new Date().getFullYear();
}
