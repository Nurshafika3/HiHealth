import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SymptomobePage } from './symptomobe.page';

const routes: Routes = [
  {
    path: '',
    component: SymptomobePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SymptomobePageRoutingModule {}
