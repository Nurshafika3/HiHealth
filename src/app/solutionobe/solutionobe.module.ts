import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionobePageRoutingModule } from './solutionobe-routing.module';

import { SolutionobePage } from './solutionobe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionobePageRoutingModule
  ],
  declarations: [SolutionobePage]
})
export class SolutionobePageModule {}
