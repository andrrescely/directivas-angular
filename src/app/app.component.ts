import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public muestras = [
    'Muestra 1',
    'Muestra 2',
    'Muestra 3',
    'Muestra 4',
    'Muestra 5',
  ];
  public muestrasConStatus = [
    { texto: 'Andres', status: true, mayorEdad: true },
    { texto: 'Esteban', status: false, mayorEdad: false },
    { texto: 'Lulú', status: true, mayorEdad: true },
    { texto: 'Carolina', status: false, mayorEdad: false },
    { texto: 'Cesar', status: true, mayorEdad: true },
  ];

  public esMayorEdad = true;
}
