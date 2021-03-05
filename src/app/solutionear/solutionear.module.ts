import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionearPageRoutingModule } from './solutionear-routing.module';

import { SolutionearPage } from './solutionear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionearPageRoutingModule
  ],
  declarations: [SolutionearPage]
})
export class SolutionearPageModule {}
