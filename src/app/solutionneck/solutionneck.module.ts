import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionneckPageRoutingModule } from './solutionneck-routing.module';

import { SolutionneckPage } from './solutionneck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionneckPageRoutingModule
  ],
  declarations: [SolutionneckPage]
})
export class SolutionneckPageModule {}
