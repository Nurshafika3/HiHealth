import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhatbreathPageRoutingModule } from './whatbreath-routing.module';

import { WhatbreathPage } from './whatbreath.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhatbreathPageRoutingModule
  ],
  declarations: [WhatbreathPage]
})
export class WhatbreathPageModule {}
