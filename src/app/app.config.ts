import { IMAGE_CONFIG, IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { TitleStrategy, provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { SeoTitleStrategy } from './seo';

const ANCHOS_FOTOS = [480, 960, 1600];

/** Las fotos están en public/img como <id>-<ancho>.webp (ver data/fotos.ts). */
function cargadorFotos({ src, width }: ImageLoaderConfig): string {
  const ancho = ANCHOS_FOTOS.find((a) => a >= (width ?? 960)) ?? 1600;
  return `/img/${src}-${ancho}.webp`;
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })),
    provideClientHydration(withEventReplay()),
    { provide: TitleStrategy, useClass: SeoTitleStrategy },
    { provide: IMAGE_LOADER, useValue: cargadorFotos },
    { provide: IMAGE_CONFIG, useValue: { breakpoints: ANCHOS_FOTOS } },
  ],
};
