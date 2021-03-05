import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatasthmaPage } from './whatasthma.page';

const routes: Routes = [
  {
    path: '',
    component: WhatasthmaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatasthmaPageRoutingModule {}
