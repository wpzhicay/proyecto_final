import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
        nombre: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        telefono: [''],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmarPassword: ['', Validators.required],
        terminos: [false, Validators.requiredTrue]
      },
      { validators: this.contraseñasCoinciden }
    );
  }

  contraseñasCoinciden(form: AbstractControl): ValidationErrors | null {
    const pass = form.get('password')?.value;
    const confirm = form.get('confirmarPassword')?.value;
    return pass === confirm ? null : { noCoinciden: true };
  }

  campoInvalido(campo: string): boolean {
    const control = this.registerForm.get(campo);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const datos = this.registerForm.value;
      console.log('✅ Registro exitoso:', datos);
      // Aquí puedes enviar los datos al backend
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
