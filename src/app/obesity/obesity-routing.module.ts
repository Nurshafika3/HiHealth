import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObesityPage } from './obesity.page';

const routes: Routes = [
  {
    path: '',
    component: ObesityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObesityPageRoutingModule {}
