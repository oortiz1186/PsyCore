import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { Appointments } from '../../../../core/services/appointments';


@Component({
  selector: 'app-appointment-list',
  imports: [RouterLink, MatButtonModule, MatTableModule, DatePipe],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.scss',
})
export class AppointmentList implements OnInit {
  appointments: any[] = [];

  displayedColumns: string[] = [
    'id',
    'patient',
    'appointment_date',
    'status',
    'notes',
  ];

  constructor(private appointmentsService: Appointments) {}

  async ngOnInit() {
    const { data, error } = await this.appointmentsService.getAll();

    if (error) {
      console.error(error);
      return;
    }

    this.appointments = data ?? [];
  }
}