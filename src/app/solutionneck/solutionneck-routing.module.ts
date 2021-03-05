import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionneckPage } from './solutionneck.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionneckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionneckPageRoutingModule {}
