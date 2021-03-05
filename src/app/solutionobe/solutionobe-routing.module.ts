import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionobePage } from './solutionobe.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionobePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionobePageRoutingModule {}
