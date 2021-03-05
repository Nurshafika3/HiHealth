import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatobePage } from './whatobe.page';

const routes: Routes = [
  {
    path: '',
    component: WhatobePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatobePageRoutingModule {}
