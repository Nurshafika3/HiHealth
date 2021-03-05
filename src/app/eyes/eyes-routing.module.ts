import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EyesPage } from './eyes.page';

const routes: Routes = [
  {
    path: '',
    component: EyesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EyesPageRoutingModule {}
