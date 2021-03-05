import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AubreathPage } from './aubreath.page';

const routes: Routes = [
  {
    path: '',
    component: AubreathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AubreathPageRoutingModule {}
