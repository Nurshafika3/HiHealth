import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptombreathPageRoutingModule } from './symptombreath-routing.module';

import { SymptombreathPage } from './symptombreath.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptombreathPageRoutingModule
  ],
  declarations: [SymptombreathPage]
})
export class SymptombreathPageModule {}
