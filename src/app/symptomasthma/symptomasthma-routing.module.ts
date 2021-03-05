import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomasthmaPage } from './symptomasthma.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomasthmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomasthmaPageRoutingModule {}
