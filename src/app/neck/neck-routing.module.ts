import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeckPage } from './neck.page';

const routes: Routes = [
  {
    path: '',
    component: NeckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeckPageRoutingModule {}
