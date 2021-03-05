import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AumalaPage } from './aumala.page';

const routes: Routes = [
  {
    path: '',
    component: AumalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AumalaPageRoutingModule {}
