import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsthmaPageRoutingModule } from './asthma-routing.module';

import { AsthmaPage } from './asthma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsthmaPageRoutingModule
  ],
  declarations: [AsthmaPage]
})
export class AsthmaPageModule {}
