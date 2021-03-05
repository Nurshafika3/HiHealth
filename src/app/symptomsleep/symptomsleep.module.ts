import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomsleepPageRoutingModule } from './symptomsleep-routing.module';

import { SymptomsleepPage } from './symptomsleep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomsleepPageRoutingModule
  ],
  declarations: [SymptomsleepPage]
})
export class SymptomsleepPageModule {}
