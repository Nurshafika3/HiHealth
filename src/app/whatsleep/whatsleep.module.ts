import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatsleepPageRoutingModule } from './whatsleep-routing.module';

import { WhatsleepPage } from './whatsleep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatsleepPageRoutingModule
  ],
  declarations: [WhatsleepPage]
})
export class WhatsleepPageModule {}
