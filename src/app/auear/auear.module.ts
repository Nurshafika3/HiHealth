import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuearPageRoutingModule } from './auear-routing.module';

import { AuearPage } from './auear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuearPageRoutingModule
  ],
  declarations: [AuearPage]
})
export class AuearPageModule {}
