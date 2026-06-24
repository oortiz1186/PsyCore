import { Routes } from '@angular/router';

import { Login } from './features/auth/pages/login/login';
import { Home } from './features/dashboard/pages/home/home';
import { MainLayout } from './shared/components/main-layout/main-layout';
import { PatientList } from './features/patients/pages/patient-list/patient-list';
import { PatientForm } from './features/patients/pages/patient-form/patient-form';
import { AppointmentList } from './features/appointments/pages/appointment-list/appointment-list';
import { AppointmentForm } from './features/appointments/pages/appointment-form/appointment-form';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },

  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        component: Home,
      },
      {
        path: 'patients',
        component: PatientList,
      },
      {
        path: 'patients/new',
        component: PatientForm,
      },
      {
        path: 'appointments',
        component: AppointmentList,
      },
      {
        path: 'appointments/new',
        component: AppointmentForm,
      },
    ],
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: 'login',
  },
];
