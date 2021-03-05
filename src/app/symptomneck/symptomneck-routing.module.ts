import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomneckPage } from './symptomneck.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomneckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomneckPageRoutingModule {}
