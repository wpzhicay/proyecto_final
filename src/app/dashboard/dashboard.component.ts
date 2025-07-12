import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // necesario para ngModel
import { PerfilComponent } from '../perfil/perfil.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, PerfilComponent], // agregamos FormsModule
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  vistaSeleccionada: string | null = null;

  // Almacena la lista de microgeneradores registrados
  equipos: { nombre: string; tipo: string; capacidad: number }[] = [];

  mostrarVista(nombre: string) {
    this.vistaSeleccionada = nombre;
  }

  cerrarVista() {
    this.vistaSeleccionada = null;
  }

  registrarEquipo() {
    const form = document.forms[0];
    const nuevo = {
      nombre: form['nombre'].value.trim(),
      tipo: form['tipo'].value.trim(),
      capacidad: parseFloat(form['capacidad'].value)
    };

    if (nuevo.nombre && nuevo.tipo && !isNaN(nuevo.capacidad)) {
      this.equipos.push(nuevo);
      form.reset();
    }
  }
}
