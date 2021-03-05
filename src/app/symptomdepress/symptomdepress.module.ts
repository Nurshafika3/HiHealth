import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomdepressPageRoutingModule } from './symptomdepress-routing.module';

import { SymptomdepressPage } from './symptomdepress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomdepressPageRoutingModule
  ],
  declarations: [SymptomdepressPage]
})
export class SymptomdepressPageModule {}
