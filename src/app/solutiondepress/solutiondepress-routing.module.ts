import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutiondepressPage } from './solutiondepress.page';

const routes: Routes = [
  {
    path: '',
    component: SolutiondepressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutiondepressPageRoutingModule {}
