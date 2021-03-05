import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SymptomasthmaPageRoutingModule } from './symptomasthma-routing.module';

import { SymptomasthmaPage } from './symptomasthma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SymptomasthmaPageRoutingModule
  ],
  declarations: [SymptomasthmaPage]
})
export class SymptomasthmaPageModule {}
