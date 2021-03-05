import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeckPageRoutingModule } from './neck-routing.module';

import { NeckPage } from './neck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeckPageRoutingModule
  ],
  declarations: [NeckPage]
})
export class NeckPageModule {}
