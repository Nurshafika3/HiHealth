import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionmalaPage } from './solutionmala.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionmalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionmalaPageRoutingModule {}
