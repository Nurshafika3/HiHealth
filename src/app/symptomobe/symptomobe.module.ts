import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomobePageRoutingModule } from './symptomobe-routing.module';

import { SymptomobePage } from './symptomobe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomobePageRoutingModule
  ],
  declarations: [SymptomobePage]
})
export class SymptomobePageModule {}
