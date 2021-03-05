import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionearPage } from './solutionear.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionearPageRoutingModule {}
