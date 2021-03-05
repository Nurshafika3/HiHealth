import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuasthmaPage } from './auasthma.page';

const routes: Routes = [
  {
    path: '',
    component: AuasthmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuasthmaPageRoutingModule {}
