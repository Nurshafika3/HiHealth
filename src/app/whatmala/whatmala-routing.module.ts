import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatmalaPage } from './whatmala.page';

const routes: Routes = [
  {
    path: '',
    component: WhatmalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatmalaPageRoutingModule {}
