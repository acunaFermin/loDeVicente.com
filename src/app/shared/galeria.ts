import { NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, computed, input, signal, viewChild } from '@angular/core';
import { FOTOS } from '../data/fotos';
import { Foto } from '../data/galerias';
import { Icono } from './icono';

@Component({
  selector: 'app-galeria',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, NgTemplateOutlet, Icono],
  template: `
    @if (mosaico()) {
      <!-- Mosaico: la primera foto ocupa 2x2. Pensado para 9 fotos (12 celdas). -->
      <ul class="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        @for (foto of fotos(); track foto.id; let i = $index) {
          <li [class]="i === 0 ? 'col-span-2 row-span-2' : 'aspect-square'">
            <button type="button" class="miniatura group size-full" [attr.aria-label]="'Ampliar foto: ' + foto.alt" (click)="abrir(i)">
              <img
                [ngSrc]="foto.id"
                [alt]="foto.alt"
                fill
                [sizes]="i === 0 ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw'"
                class="object-cover transition duration-500 group-hover:scale-105"
              />
              <ng-container *ngTemplateOutlet="leyenda; context: { $implicit: foto }" />
            </button>
          </li>
        }
      </ul>
    } @else {
      <!-- Masonry: respeta la proporción de cada foto. -->
      <ul class="columns-2 gap-3 sm:gap-4 md:columns-3 lg:columns-4">
        @for (foto of fotos(); track foto.id; let i = $index) {
          <li class="mb-3 break-inside-avoid sm:mb-4">
            <button type="button" class="miniatura group w-full" [attr.aria-label]="'Ampliar foto: ' + foto.alt" (click)="abrir(i)">
              <img
                [ngSrc]="foto.id"
                [alt]="foto.alt"
                [width]="dimensiones[foto.id].w"
                [height]="dimensiones[foto.id].h"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                class="h-auto w-full transition duration-500 group-hover:scale-105"
              />
              <ng-container *ngTemplateOutlet="leyenda; context: { $implicit: foto }" />
            </button>
          </li>
        }
      </ul>
    }

    <ng-template #leyenda let-foto>
      @if (foto.desc) {
        <span
          class="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-3 pt-10 text-left text-sm leading-snug text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100 max-md:hidden"
        >
          {{ foto.desc }}
        </span>
      }
    </ng-template>

    <dialog
      #dialogo
      class="m-auto size-full max-h-none max-w-none bg-transparent p-0 backdrop:bg-black/90"
      aria-label="Galería de fotos"
      (close)="actual.set(-1)"
      (keydown.arrowleft)="mover(-1)"
      (keydown.arrowright)="mover(1)"
      (touchstart)="inicioToque($event)"
      (touchend)="finToque($event)"
    >
      @if (fotoActual(); as foto) {
        <div class="flex size-full flex-col items-center justify-center gap-4 p-4 sm:p-10" (click)="cerrarSiFondo($event)">
          <img
            [src]="'/img/' + foto.id + '-1600.webp'"
            [alt]="foto.alt"
            class="max-h-[78vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
          />
          <p class="max-w-2xl text-center text-sm text-white/85 sm:text-base">
            {{ foto.desc ?? foto.alt }}
            <span class="ml-2 text-white/50">{{ actual() + 1 }} / {{ fotos().length }}</span>
          </p>
        </div>
        <button type="button" class="boton-lightbox top-4 right-4" aria-label="Cerrar" (click)="cerrar()">
          <app-icono nombre="cerrar" class="size-6" />
        </button>
        <button type="button" class="boton-lightbox top-1/2 left-3 -translate-y-1/2" aria-label="Foto anterior" (click)="mover(-1)">
          <app-icono nombre="izquierda" class="size-7" />
        </button>
        <button type="button" class="boton-lightbox top-1/2 right-3 -translate-y-1/2" aria-label="Foto siguiente" (click)="mover(1)">
          <app-icono nombre="derecha" class="size-7" />
        </button>
      }
    </dialog>
  `,
  styles: `
    .miniatura {
      position: relative;
      display: block;
      overflow: hidden;
      border-radius: 1rem;
      background: var(--color-arena);
    }
    .miniatura:focus-visible {
      outline: 3px solid var(--color-terracota);
      outline-offset: 2px;
    }
    .boton-lightbox {
      position: absolute;
      display: grid;
      place-items: center;
      width: 3rem;
      height: 3rem;
      border-radius: 9999px;
      color: white;
      background: rgb(255 255 255 / 0.12);
      backdrop-filter: blur(6px);
      transition: background 0.2s;
    }
    .boton-lightbox:hover {
      background: rgb(255 255 255 / 0.25);
    }
  `,
})
export class Galeria {
  readonly fotos = input.required<Foto[]>();
  readonly mosaico = input(false);

  protected readonly dimensiones = FOTOS;
  protected readonly actual = signal(-1);
  protected readonly fotoActual = computed(() => this.fotos()[this.actual()]);

  private readonly dialogo = viewChild.required<ElementRef<HTMLDialogElement>>('dialogo');
  private toqueX = 0;

  protected abrir(indice: number) {
    this.actual.set(indice);
    this.dialogo().nativeElement.showModal();
  }

  protected cerrar() {
    this.dialogo().nativeElement.close();
  }

  protected cerrarSiFondo(evento: MouseEvent) {
    if (evento.target === evento.currentTarget) this.cerrar();
  }

  protected mover(paso: number) {
    const total = this.fotos().length;
    this.actual.update((i) => (i + paso + total) % total);
  }

  protected inicioToque(evento: TouchEvent) {
    this.toqueX = evento.changedTouches[0].clientX;
  }

  protected finToque(evento: TouchEvent) {
    const delta = evento.changedTouches[0].clientX - this.toqueX;
    if (Math.abs(delta) > 50) this.mover(delta > 0 ? -1 : 1);
  }
}
