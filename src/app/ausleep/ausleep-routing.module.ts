import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AusleepPage } from './ausleep.page';

const routes: Routes = [
  {
    path: '',
    component: AusleepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AusleepPageRoutingModule {}
