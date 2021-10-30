import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ImagenesService } from '../imagenes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  constructor(
    private imagenesServices: ImagenesService,
    private route: Router
  ) {}

  imagenes = this.imagenesServices.imgInicio;

  navegar() {
    this.route.navigate(['estadias']);
  }
}
