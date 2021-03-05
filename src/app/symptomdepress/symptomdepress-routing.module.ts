import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomdepressPage } from './symptomdepress.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomdepressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomdepressPageRoutingModule {}
