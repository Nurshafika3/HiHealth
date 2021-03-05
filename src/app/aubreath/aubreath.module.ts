import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AubreathPageRoutingModule } from './aubreath-routing.module';

import { AubreathPage } from './aubreath.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AubreathPageRoutingModule
  ],
  declarations: [AubreathPage]
})
export class AubreathPageModule {}
