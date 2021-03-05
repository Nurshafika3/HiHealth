import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuobePageRoutingModule } from './auobe-routing.module';

import { AuobePage } from './auobe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuobePageRoutingModule
  ],
  declarations: [AuobePage]
})
export class AuobePageModule {}
