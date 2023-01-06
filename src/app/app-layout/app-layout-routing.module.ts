import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from '../admin/configuration/configuration.component';
import { DoctorComponent } from '../admin/doctor/doctor.component';
import { SupportComponent } from '../admin/support/support.component';
import { UserModalComponent } from '../admin/users/user-modal/user-modal.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLayoutRoutingModule { }
