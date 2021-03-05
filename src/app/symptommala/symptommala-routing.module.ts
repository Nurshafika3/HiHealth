import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptommalaPage } from './symptommala.page';

const routes: Routes = [
  {
    path: '',
    component: SymptommalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptommalaPageRoutingModule {}
