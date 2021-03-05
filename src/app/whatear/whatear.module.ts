import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatearPageRoutingModule } from './whatear-routing.module';

import { WhatearPage } from './whatear.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatearPageRoutingModule
  ],
  declarations: [WhatearPage]
})
export class WhatearPageModule {}
