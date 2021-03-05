import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionmalaPageRoutingModule } from './solutionmala-routing.module';

import { SolutionmalaPage } from './solutionmala.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionmalaPageRoutingModule
  ],
  declarations: [SolutionmalaPage]
})
export class SolutionmalaPageModule {}
