import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    showNonCurrentDates: false,
    timeZone: 'local',
    locale: 'ja',
    initialDate: new Date(),
    headerToolbar: {
      right: 'selectPlaceButton addEventButton prev,next',
    },
    buttonText: {
      month: '月',
      week: '週',
      day: '日',
    },
    customButtons: {
      addEventButton: {
        text: '予約を追加',
        click: () => {
          console.log('addEventButton');
        },
      },
      selectPlaceButton: {
        text: '場所を選択',
        click: () => {
          console.log('selectPlaceButton');
        },
      },
    },
    events: [
      { title: 'event 1', date: '2023-07-22' },
      { title: 'event 2', date: '2023-07-25' },
      { title: 'event 3', date: '2023-07-26' },
      { title: 'event 4', date: '2023-07-27' },
    ],
  };

  ngOnInit() {
    console.log('ngOnInit');
  }
}
