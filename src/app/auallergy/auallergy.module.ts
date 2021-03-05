import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuallergyPageRoutingModule } from './auallergy-routing.module';

import { AuallergyPage } from './auallergy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuallergyPageRoutingModule
  ],
  declarations: [AuallergyPage]
})
export class AuallergyPageModule {}
