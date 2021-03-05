import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsthmaPage } from './asthma.page';

const routes: Routes = [
  {
    path: '',
    component: AsthmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsthmaPageRoutingModule {}
