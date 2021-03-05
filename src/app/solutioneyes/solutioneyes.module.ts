import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutioneyesPageRoutingModule } from './solutioneyes-routing.module';

import { SolutioneyesPage } from './solutioneyes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutioneyesPageRoutingModule
  ],
  declarations: [SolutioneyesPage]
})
export class SolutioneyesPageModule {}
