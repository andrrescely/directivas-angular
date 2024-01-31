import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.scss'],
})
export class MensajeComponent {
  @Input() mostrarMensaje = false; 
  public nombres = ['Andres', 'Esteban', 'Camila', 'Carolina', 'Lulú'];
}
