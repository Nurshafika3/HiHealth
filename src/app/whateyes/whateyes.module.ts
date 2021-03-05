import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhateyesPageRoutingModule } from './whateyes-routing.module';

import { WhateyesPage } from './whateyes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhateyesPageRoutingModule
  ],
  declarations: [WhateyesPage]
})
export class WhateyesPageModule {}
