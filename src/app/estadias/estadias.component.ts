import { Component } from '@angular/core';
import { ImagenesService } from '../imagenes.service';

@Component({
  selector: 'app-estadias',
  templateUrl: './estadias.component.html',
  styleUrls: ['./estadias.component.css'],
})
export class EstadiasComponent {
  imagen: string[];
  ruta: string = this.imagenesService.rutaEstadias;
  zoom: boolean = false;
  imagenZoom: string[] = [];
  index: number = 0;
  imagenes: string[] = [];
  tipo: string = '';

  ampliar(img: string, i: number, imagen: string[]) {
    this.zoom = true;
    this.imagenZoom[1] = img;
    this.index = i;
    this.imagenes = imagen;
    this.tipo = 'estadias';
  }

  cerrarZoom(cerrarZoom: any) {
    this.zoom = cerrarZoom;
  }
  constructor(private imagenesService: ImagenesService) {
    this.imagen = this.imagenesService.imgEstadias;
  }
}
