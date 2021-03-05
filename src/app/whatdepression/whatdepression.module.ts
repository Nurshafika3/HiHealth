import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatdepressionPageRoutingModule } from './whatdepression-routing.module';

import { WhatdepressionPage } from './whatdepression.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatdepressionPageRoutingModule
  ],
  declarations: [WhatdepressionPage]
})
export class WhatdepressionPageModule {}
