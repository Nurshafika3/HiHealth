import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatneckPage } from './whatneck.page';

const routes: Routes = [
  {
    path: '',
    component: WhatneckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatneckPageRoutingModule {}
