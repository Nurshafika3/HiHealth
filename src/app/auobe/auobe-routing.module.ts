import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuobePage } from './auobe.page';

const routes: Routes = [
  {
    path: '',
    component: AuobePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuobePageRoutingModule {}
