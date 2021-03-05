import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutiondepressPageRoutingModule } from './solutiondepress-routing.module';

import { SolutiondepressPage } from './solutiondepress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutiondepressPageRoutingModule
  ],
  declarations: [SolutiondepressPage]
})
export class SolutiondepressPageModule {}
