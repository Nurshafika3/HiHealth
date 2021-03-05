import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomallergyPageRoutingModule } from './symptomallergy-routing.module';

import { SymptomallergyPage } from './symptomallergy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomallergyPageRoutingModule
  ],
  declarations: [SymptomallergyPage]
})
export class SymptomallergyPageModule {}
