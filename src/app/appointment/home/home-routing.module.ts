import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageAppointment } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePageAppointment
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}