import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatobePageRoutingModule } from './whatobe-routing.module';

import { WhatobePage } from './whatobe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatobePageRoutingModule
  ],
  declarations: [WhatobePage]
})
export class WhatobePageModule {}
