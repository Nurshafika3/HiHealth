import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomearPageRoutingModule } from './symptomear-routing.module';

import { SymptomearPage } from './symptomear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomearPageRoutingModule
  ],
  declarations: [SymptomearPage]
})
export class SymptomearPageModule {}
