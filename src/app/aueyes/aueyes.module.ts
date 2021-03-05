import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AueyesPageRoutingModule } from './aueyes-routing.module';

import { AueyesPage } from './aueyes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AueyesPageRoutingModule
  ],
  declarations: [AueyesPage]
})
export class AueyesPageModule {}
