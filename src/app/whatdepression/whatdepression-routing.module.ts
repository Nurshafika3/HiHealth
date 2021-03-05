import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatdepressionPage } from './whatdepression.page';

const routes: Routes = [
  {
    path: '',
    component: WhatdepressionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatdepressionPageRoutingModule {}
