import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomeyesPageRoutingModule } from './symptomeyes-routing.module';

import { SymptomeyesPage } from './symptomeyes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomeyesPageRoutingModule
  ],
  declarations: [SymptomeyesPage]
})
export class SymptomeyesPageModule {}
