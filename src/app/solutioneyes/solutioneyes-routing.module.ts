import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutioneyesPage } from './solutioneyes.page';

const routes: Routes = [
  {
    path: '',
    component: SolutioneyesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutioneyesPageRoutingModule {}
