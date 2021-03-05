import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolutionsleepPage } from './solutionsleep.page';

const routes: Routes = [
  {
    path: '',
    component: SolutionsleepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolutionsleepPageRoutingModule {}
