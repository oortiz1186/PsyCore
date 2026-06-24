import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

import { Patients } from '../../../../core/services/patients';
import { Appointments } from '../../../../core/services/appointments';

@Component({
  selector: 'app-appointment-form',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatSelectModule],
  templateUrl: './appointment-form.html',
  styleUrl: './appointment-form.scss',
})
export class AppointmentForm implements OnInit {
  patients: any[] = [];

  appointment = {
    patient_id: null,
    appointment_date: '',
    status: 'Pendiente',
    notes: '',
  };

  constructor(
    private patientsService: Patients,
    private appointmentsService: Appointments,
    private router: Router,
  ) {}

  async ngOnInit() {
    const { data, error } = await this.patientsService.getAll();

    if (error) {
      console.error('Error cargando pacientes:', error);
      alert('Error cargando pacientes');
      return;
    }

    console.log('Pacientes cargados:', data);
    this.patients = data ?? [];
  }

  async save() {
    const { error } = await this.appointmentsService.create(this.appointment);

    if (error) {
      console.error(error);
      alert('Error al guardar cita');
      return;
    }

    alert('Cita guardada correctamente');

    await this.router.navigate(['/appointments']);
  }
}
