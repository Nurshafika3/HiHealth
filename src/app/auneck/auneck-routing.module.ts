import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuneckPage } from './auneck.page';

const routes: Routes = [
  {
    path: '',
    component: AuneckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuneckPageRoutingModule {}
