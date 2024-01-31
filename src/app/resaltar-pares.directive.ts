import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appResaltarPares]',
})
export class ResaltarParesDirective implements OnInit {
  constructor(private elRef: ElementRef) {}

  @Input() valor = '';

  ngOnInit() {
    const numero = this.obtenerNumero(this.valor);
    if (numero % 2 === 0) {
      this.elRef.nativeElement.style.backgroundColor = 'red';
    }
  }

  obtenerNumero(cadena: string): number {
    return parseInt(cadena.split(' ')[1], 10);
  }
}