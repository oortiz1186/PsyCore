import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { Patients } from '../../../../core/services/patients';

@Component({
  selector: 'app-patient-form',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  templateUrl: './patient-form.html',
  styleUrl: './patient-form.scss',
})
export class PatientForm {
  patient = {
    first_name: '',
    last_name: '',
    birth_date: '',
    gender: '',
    phone: '',
    email: '',
    address: '',
    emergency_contact: '',
    emergency_phone: '',
    consultation_reason: '',
    active: true,
  };

  constructor(
    private patientsService: Patients,
    private router: Router
  ) {}

  async save() {
    const { error } = await this.patientsService.create(this.patient);

    if (error) {
      console.error(error);
      alert('Error al guardar paciente');
      return;
    }

    alert('Paciente guardado correctamente');
    await this.router.navigate(['/patients']);
  }
}