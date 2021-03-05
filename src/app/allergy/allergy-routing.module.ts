import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllergyPage } from './allergy.page';

const routes: Routes = [
  {
    path: '',
    component: AllergyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllergyPageRoutingModule {}
