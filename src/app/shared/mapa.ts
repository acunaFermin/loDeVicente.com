import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SITIO } from '../data/sitio';

@Component({
  selector: 'app-mapa',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block overflow-hidden rounded-[2rem] bg-arena shadow-sm ring-1 ring-tinta/5' },
  template: `
    <iframe
      [src]="url"
      title="Mapa de ubicación de Lo de Vicente en Tandil"
      class="size-full border-0"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
    ></iframe>
  `,
})
export class Mapa {
  protected readonly url = inject(DomSanitizer).bypassSecurityTrustResourceUrl(SITIO.mapaEmbed);
}
