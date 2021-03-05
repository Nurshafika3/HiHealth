import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhateyesPage } from './whateyes.page';

const routes: Routes = [
  {
    path: '',
    component: WhateyesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhateyesPageRoutingModule {}
