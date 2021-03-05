import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObesityPageRoutingModule } from './obesity-routing.module';

import { ObesityPage } from './obesity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObesityPageRoutingModule
  ],
  declarations: [ObesityPage]
})
export class ObesityPageModule {}
