import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { Auth } from '../../../../core/services/auth';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email = '';
  password = '';
  loading = false;
  errorMessage = '';

  constructor(
    private auth: Auth,
    private router: Router
  ) {}

  async onLogin() {
    this.loading = true;
    this.errorMessage = '';

    const { error } = await this.auth.login(
      this.email,
      this.password
    );

    this.loading = false;

    if (error) {
      this.errorMessage = error.message;
      return;
    }

    await this.router.navigate(['/dashboard']);
  }
}