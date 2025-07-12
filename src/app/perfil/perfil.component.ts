import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
    imagenPreview: string | null = null;
  perfilForm: FormGroup;
  modoEdicion = false;

  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      id: ['USR-001', Validators.required],
      nombre: ['Patricio Pérez', Validators.required],
      email: ['patricio@example.com', [Validators.required, Validators.email]],
      telefono: ['0987654321'],
      pais: ['Ecuador', Validators.required],
      provincia: ['Azuay', Validators.required],
      ciudad: ['Cuenca', Validators.required],
      foto: [null]
    });

    this.perfilForm.disable(); // Empieza como solo lectura
  }

  activarEdicion() {
    this.modoEdicion = true;
    this.perfilForm.enable();
  }

  guardarCambios() {
    this.modoEdicion = false;
    this.perfilForm.disable();
    console.log('Datos guardados:', this.perfilForm.value);
  }

  cancelar() {
    this.perfilForm.disable();
    this.modoEdicion = false;
  }

  onFotoSeleccionada(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const archivo = input.files[0];
      this.perfilForm.patchValue({ foto: archivo });
      console.log('Foto seleccionada:', archivo.name);
    }
  }
}
