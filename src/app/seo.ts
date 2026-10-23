import { DOCUMENT, Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { SITIO } from './data/sitio';

const IMAGEN_COMPARTIR = `${SITIO.url}/img/og-lo-de-vicente.jpg`;

/**
 * Actualiza título, descripción, URL canónica y etiquetas Open Graph de cada ruta.
 * Como las páginas se prerenderizan, todo esto queda escrito en el HTML que lee Google.
 */
@Injectable({ providedIn: 'root' })
export class SeoTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly document = inject(DOCUMENT);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    let ruta = snapshot.root;
    while (ruta.firstChild) ruta = ruta.firstChild;

    const titulo = this.buildTitle(snapshot) ?? SITIO.nombre;
    const descripcion: string = ruta.data['descripcion'] ?? '';
    // Con barra final: cada página prerenderizada es <ruta>/index.html y nginx redirige /ruta -> /ruta/.
    const camino = snapshot.url.split(/[?#]/)[0].replace(/\/$/, '');
    const url = `${SITIO.url}${camino}/`;

    this.title.setTitle(titulo);
    this.meta.updateTag({ name: 'description', content: descripcion });
    this.meta.updateTag({ property: 'og:title', content: titulo });
    this.meta.updateTag({ property: 'og:description', content: descripcion });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:image', content: IMAGEN_COMPARTIR });
    this.meta.updateTag({ name: 'twitter:title', content: titulo });
    this.meta.updateTag({ name: 'twitter:description', content: descripcion });

    let canonical = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.rel = 'canonical';
      this.document.head.appendChild(canonical);
    }
    canonical.href = url;
  }
}
