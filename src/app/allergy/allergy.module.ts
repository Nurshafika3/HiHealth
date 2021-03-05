import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllergyPageRoutingModule } from './allergy-routing.module';

import { AllergyPage } from './allergy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllergyPageRoutingModule
  ],
  declarations: [AllergyPage]
})
export class AllergyPageModule {}
