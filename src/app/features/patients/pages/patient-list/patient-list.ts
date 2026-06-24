import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { Patients } from '../../../../core/services/patients';

@Component({
  selector: 'app-patient-list',
  imports: [RouterLink, MatTableModule, MatButtonModule],
  templateUrl: './patient-list.html',
  styleUrl: './patient-list.scss',
})
export class PatientList implements OnInit {
  patients: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'phone', 'email', 'active'];

  constructor(private patientsService: Patients) {}

  async ngOnInit() {
    const { data, error } = await this.patientsService.getAll();

    if (error) {
      console.error(error);
      return;
    }

    this.patients = data || [];
  }
}