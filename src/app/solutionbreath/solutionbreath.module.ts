import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionbreathPageRoutingModule } from './solutionbreath-routing.module';

import { SolutionbreathPage } from './solutionbreath.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionbreathPageRoutingModule
  ],
  declarations: [SolutionbreathPage]
})
export class SolutionbreathPageModule {}
