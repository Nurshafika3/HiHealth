import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionallergyPageRoutingModule } from './solutionallergy-routing.module';

import { SolutionallergyPage } from './solutionallergy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionallergyPageRoutingModule
  ],
  declarations: [SolutionallergyPage]
})
export class SolutionallergyPageModule {}
