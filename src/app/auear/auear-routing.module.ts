import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuearPage } from './auear.page';

const routes: Routes = [
  {
    path: '',
    component: AuearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuearPageRoutingModule {}
