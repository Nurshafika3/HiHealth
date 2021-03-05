import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatallergyPageRoutingModule } from './whatallergy-routing.module';

import { WhatallergyPage } from './whatallergy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatallergyPageRoutingModule
  ],
  declarations: [WhatallergyPage]
})
export class WhatallergyPageModule {}
