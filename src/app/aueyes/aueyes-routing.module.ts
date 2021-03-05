import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AueyesPage } from './aueyes.page';

const routes: Routes = [
  {
    path: '',
    component: AueyesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AueyesPageRoutingModule {}
