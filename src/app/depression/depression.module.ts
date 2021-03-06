import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepressionPageRoutingModule } from './depression-routing.module';

import { DepressionPage } from './depression.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepressionPageRoutingModule
  ],
  declarations: [DepressionPage]
})
export class DepressionPageModule {}
