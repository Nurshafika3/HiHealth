import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuneckPageRoutingModule } from './auneck-routing.module';

import { AuneckPage } from './auneck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuneckPageRoutingModule
  ],
  declarations: [AuneckPage]
})
export class AuneckPageModule {}
