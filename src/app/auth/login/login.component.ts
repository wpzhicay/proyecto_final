import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service'; // ajusta la ruta si es necesario

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe({
        next: (response) => {
          // Aquí puedes guardar el token si lo recibes
          // localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.errorMessage = 'Credenciales inválidas o error de conexión.';
          console.error(err);
        }
      });
    }
  }
}
