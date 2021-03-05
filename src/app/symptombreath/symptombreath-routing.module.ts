import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptombreathPage } from './symptombreath.page';

const routes: Routes = [
  {
    path: '',
    component: SymptombreathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptombreathPageRoutingModule {}
