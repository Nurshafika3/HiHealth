import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomsleepPage } from './symptomsleep.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomsleepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomsleepPageRoutingModule {}
