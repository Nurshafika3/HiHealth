import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhatsleepPage } from './whatsleep.page';

const routes: Routes = [
  {
    path: '',
    component: WhatsleepPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatsleepPageRoutingModule {}
