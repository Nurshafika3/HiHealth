import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EarPageRoutingModule } from './ear-routing.module';

import { EarPage } from './ear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EarPageRoutingModule
  ],
  declarations: [EarPage]
})
export class EarPageModule {}
