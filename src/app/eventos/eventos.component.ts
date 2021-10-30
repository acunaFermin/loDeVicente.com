import { Component } from '@angular/core';
import { ImagenesService } from '../imagenes.service';
import { EstadiasComponent } from '../estadias/estadias.component';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent {
  imagen: string[];
  ruta: string = this.imagenesService.rutaEventos;
  zoom: boolean = false;
  imagenZoom: string[] = [];
  index: number = 0;
  imagenes: string[] = [];
  tipo: string = '';

  ampliar(img: string, i: number, imagen: string[]) {
    this.zoom = true;
    this.imagenZoom[0] = img;
    this.index = i;
    this.imagenes = imagen;
    this.tipo = 'eventos';
  }
  cerrarZoom(cerrarZoom: any) {
    this.zoom = cerrarZoom;
  }
  constructor(private imagenesService: ImagenesService) {
    this.imagen = this.imagenesService.imgEventos;
  }
}
