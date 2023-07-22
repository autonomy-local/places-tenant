import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceRoutingModule } from './place-routing.module';
import { PlaceComponent } from './place.component';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiBlockStatusModule } from '@taiga-ui/layout';
import { TuiStepperModule } from '@taiga-ui/kit';
import { TuiFormatNumberPipeModule } from '@taiga-ui/core';
import { TuiTagModule } from '@taiga-ui/kit';
import { TuiNotificationModule } from '@taiga-ui/core';
import { TuiButtonModule } from '@taiga-ui/core';

@NgModule({
  declarations: [PlaceComponent],
  imports: [
    CommonModule,
    PlaceRoutingModule,
    TuiTableModule,
    TuiFormatNumberPipeModule,
    TuiTagModule,
    TuiBlockStatusModule,
    TuiStepperModule,
    TuiNotificationModule,
    TuiButtonModule,
  ],
})
export class PlaceModule {}
