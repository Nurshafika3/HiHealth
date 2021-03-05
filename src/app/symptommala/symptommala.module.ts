import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptommalaPageRoutingModule } from './symptommala-routing.module';

import { SymptommalaPage } from './symptommala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptommalaPageRoutingModule
  ],
  declarations: [SymptommalaPage]
})
export class SymptommalaPageModule {}
