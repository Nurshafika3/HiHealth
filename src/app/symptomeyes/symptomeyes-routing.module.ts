import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomeyesPage } from './symptomeyes.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomeyesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomeyesPageRoutingModule {}
