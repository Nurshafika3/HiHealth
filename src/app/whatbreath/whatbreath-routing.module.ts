import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatbreathPage } from './whatbreath.page';

const routes: Routes = [
  {
    path: '',
    component: WhatbreathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatbreathPageRoutingModule {}
