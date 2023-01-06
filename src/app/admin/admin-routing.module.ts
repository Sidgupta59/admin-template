import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FinanceComponent } from './finance/finance.component';
import { PatientComponent } from './patient/patient.component';
import { SupportComponent } from './support/support.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'users',
        component: UsersComponent
      },
      {
        path: 'patients',
        component: PatientComponent
      },
      {
        path: 'finance',
        component: FinanceComponent
      },
      {
        path: 'support',
        component: SupportComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
