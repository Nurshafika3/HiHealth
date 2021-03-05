import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuasthmaPageRoutingModule } from './auasthma-routing.module';

import { AuasthmaPage } from './auasthma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuasthmaPageRoutingModule
  ],
  declarations: [AuasthmaPage]
})
export class AuasthmaPageModule {}
