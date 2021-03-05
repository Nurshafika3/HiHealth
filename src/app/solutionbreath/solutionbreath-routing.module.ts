import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionbreathPage } from './solutionbreath.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionbreathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionbreathPageRoutingModule {}
