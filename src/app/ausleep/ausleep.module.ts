import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AusleepPageRoutingModule } from './ausleep-routing.module';

import { AusleepPage } from './ausleep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AusleepPageRoutingModule
  ],
  declarations: [AusleepPage]
})
export class AusleepPageModule {}
