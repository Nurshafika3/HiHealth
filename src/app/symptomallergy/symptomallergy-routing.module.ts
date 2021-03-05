import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomallergyPage } from './symptomallergy.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomallergyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomallergyPageRoutingModule {}
