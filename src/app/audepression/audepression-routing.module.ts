import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudepressionPage } from './audepression.page';

const routes: Routes = [
  {
    path: '',
    component: AudepressionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudepressionPageRoutingModule {}
