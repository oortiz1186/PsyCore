import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';

import { Patients } from '../../../../core/services/patients';

@Component({
  selector: 'app-patient-detail',
  imports: [JsonPipe],
  templateUrl: './patient-detail.html',
  styleUrl: './patient-detail.scss',
})
export class PatientDetail implements OnInit {
  patient: any = null;

  constructor(
    private route: ActivatedRoute,
    private patientsService: Patients
  ) {}

  async ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const { data, error } = await this.patientsService.getById(id);

    if (error) {
      console.error(error);
      return;
    }

    this.patient = data;
  }
}