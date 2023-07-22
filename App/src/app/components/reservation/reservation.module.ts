import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationComponent } from './reservation.component';

import { FullCalendarModule } from '@fullcalendar/angular';
import { TuiBlockStatusModule } from '@taiga-ui/layout';

@NgModule({
  declarations: [ReservationComponent],
  imports: [
    CommonModule,
    ReservationRoutingModule,
    FullCalendarModule,
    TuiBlockStatusModule,
  ],
})
export class ReservationModule {}
