import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MalariaPage } from './malaria.page';

const routes: Routes = [
  {
    path: '',
    component: MalariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MalariaPageRoutingModule {}
