import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudepressionPageRoutingModule } from './audepression-routing.module';

import { AudepressionPage } from './audepression.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudepressionPageRoutingModule
  ],
  declarations: [AudepressionPage]
})
export class AudepressionPageModule {}
