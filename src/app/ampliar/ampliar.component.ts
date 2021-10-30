import {
  Component,
  Output,
  EventEmitter,
  Input,
  HostListener,
  OnInit,
} from '@angular/core';
import { ImagenesService } from '../imagenes.service';

@Component({
  selector: 'app-ampliar',
  templateUrl: './ampliar.component.html',
  styleUrls: ['./ampliar.component.css'],
})
export class AmpliarComponent implements OnInit {
  @Output() cerrar: EventEmitter<any> = new EventEmitter();
  @Input() arrayZoom: string[] = [];
  @Input() imgIndex: number = 0;
  @Input() imgArray: string[] = [];
  @Input() tipo: string = '';

  cerrarZoom: boolean = false;
  rutaEventos: string = this.imagenService.rutaEventos;
  rutaEstadias: string = this.imagenService.rutaEstadias;
  ruta: string = '';

  touchStart: number = 0;
  touchEnd: number = 0;
  touchMove: number = 0;

  left: string = '0px';
  tLeft: number = 0;
  leftMem: number = 0;
  leftCero: number = 0;

  arrawWidth: number[] = [];
  innerWidth: number = 0;

  transitionValue: string = '0ms';
  clickDown: boolean = false;

  timeStart: any = 0;
  timeEnd: any = 0;

  constructor(private imagenService: ImagenesService) {}
  ngOnInit(): void {
    for (let i = 0; i < this.imgArray.length; i++) {
      this.arrayZoom[i] = this.Ruta() + this.imgArray[i];
    }
    this.innerWidth = window.innerWidth;
  }
  ngAfterViewInit(): void {
    for (let i = 0; i < this.imgArray.length; i++) {
      let img = `idImagen${i}`;
      this.arrawWidth[i] = document.getElementById(img)!.clientWidth;
    }

    this.leftCero = (this.innerWidth - this.arrawWidth[0]) * 0.5;

    this.Center()
      .then((left) => (this.left = left))
      .catch((err) => console.log(err));
  }

  async Center(): Promise<string> {
    try {
      let initialLeft = 0;
      for (let i = 0; i < this.imgIndex; i++) {
        initialLeft = initialLeft + this.arrawWidth[i] + 20;
      }

      if (this.imgIndex == 0) {
        let ceroCorrect = this.leftCero - 10;
        return ceroCorrect + 'px';
      } else {
        this.leftMem =
          -10 +
          this.leftCero -
          initialLeft +
          (this.innerWidth -
            2 * this.leftCero -
            this.arrawWidth[this.imgIndex]) *
            0.5;

        return this.leftMem + 'px';
      }
    } catch (err) {
      return 'algo salio mal';
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart = (e: TouchEvent) => {
    this.touchStart = e.changedTouches[0].clientX;
    this.transitionValue = '0ms';

    let time = new Date();
    this.timeStart = time.getTime();
  };

  @HostListener('touchend', ['$event'])
  onTouchEnd = (e: any) => {
    this.touchEnd = e.changedTouches[0].clientX;
    this.leftMem = this.tLeft;

    let time = new Date();
    let timeEnd = time.getTime();

    this.Move(timeEnd);
  };

  @HostListener('touchmove', ['$event'])
  onTouchMove = (e: any) => {
    if (this.imgIndex === 0) {
      this.leftMem = this.leftCero;
    }
    this.touchMove = e.changedTouches[0].clientX;
    this.tLeft = this.leftMem + this.touchMove - this.touchStart;
    this.left = this.tLeft + 'px';
  };

  /**********mouse event**************/

  @HostListener('mousedown', ['$event'])
  onMouseDown = (e: MouseEvent) => {
    if (this.imgIndex === 0) {
      this.leftMem = this.leftCero;
    }
    this.clickDown = true;
    this.touchStart = e.clientX;
    this.transitionValue = '0ms';

    let time = new Date();
    this.timeStart = time.getTime();
  };

  @HostListener('mouseup', ['$event'])
  onMouseUp = (e: MouseEvent) => {
    this.clickDown = false;
    this.touchEnd = e.clientX;
    this.leftMem = this.tLeft;

    let time = new Date();
    let timeEnd = time.getTime();

    this.Move(timeEnd);
  };

  Move(timeEnd: number) {
    let touch = this.arrawWidth[this.imgIndex] * 0.5;

    if (
      timeEnd - this.timeStart < 500 ||
      Math.abs(this.touchEnd - this.touchStart) > touch
    ) {
      if (this.touchEnd - this.touchStart > 10) {
        this.izq(timeEnd - this.timeStart);
      }
      if (this.touchEnd - this.touchStart < -10) {
        this.derecha(timeEnd - this.timeStart);
      }
    } else {
      this.SetTransition(500);
      this.Center()
        .then((left) => (this.left = left))
        .catch((err) => console.log(err));
    }
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove = (e: MouseEvent) => {
    if (this.clickDown == true) {
      this.touchMove = e.clientX;
      this.tLeft = this.leftMem + this.touchMove - this.touchStart;
      this.left = this.tLeft + 'px';
    }
  };

  close() {
    this.imgIndex = 0;
    this.cerrar.emit(this.cerrarZoom);
  }

  Ruta() {
    if (this.tipo == 'eventos') {
      this.ruta = this.rutaEventos;
    }
    if (this.tipo == 'estadias') {
      this.ruta = this.rutaEstadias;
    }
    return this.ruta;
  }

  derecha(transTime: number) {
    let n = this.imgArray.length;
    if (this.imgIndex == n - 1) {
      this.imgIndex = -1;
    }
    this.imgIndex++;

    this.SetTransition(transTime);

    this.Center()
      .then((left) => (this.left = left))
      .catch((err) => console.log(err));
  }
  izq(transTime: number) {
    let n = this.imgArray.length;
    if (this.imgIndex == 0) {
      this.imgIndex = n;
    }
    this.imgIndex--;

    this.SetTransition(transTime);

    this.Center()
      .then((left) => (this.left = left))
      .catch((err) => console.log(err));
  }

  SetTransition(timeDif: number) {
    console.log(timeDif);
    if (timeDif > 500) {
      timeDif = 500;
    }
    this.transitionValue = timeDif + 'ms';
  }
}
