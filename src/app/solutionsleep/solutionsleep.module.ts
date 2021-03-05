import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionsleepPageRoutingModule } from './solutionsleep-routing.module';

import { SolutionsleepPage } from './solutionsleep.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionsleepPageRoutingModule
  ],
  declarations: [SolutionsleepPage]
})
export class SolutionsleepPageModule {}
