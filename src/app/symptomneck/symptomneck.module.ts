import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomneckPageRoutingModule } from './symptomneck-routing.module';

import { SymptomneckPage } from './symptomneck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomneckPageRoutingModule
  ],
  declarations: [SymptomneckPage]
})
export class SymptomneckPageModule {}
