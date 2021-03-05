import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EyesPageRoutingModule } from './eyes-routing.module';

import { EyesPage } from './eyes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EyesPageRoutingModule
  ],
  declarations: [EyesPage]
})
export class EyesPageModule {}
