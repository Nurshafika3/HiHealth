import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionallergyPage } from './solutionallergy.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionallergyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionallergyPageRoutingModule {}
