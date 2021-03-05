import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EarPage } from './ear.page';

const routes: Routes = [
  {
    path: '',
    component: EarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EarPageRoutingModule {}
