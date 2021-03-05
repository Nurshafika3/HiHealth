import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MalariaPageRoutingModule } from './malaria-routing.module';

import { MalariaPage } from './malaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MalariaPageRoutingModule
  ],
  declarations: [MalariaPage]
})
export class MalariaPageModule {}
