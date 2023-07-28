import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  signal,
} from '@angular/core';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Router } from '@angular/router';
import { EventWithRXDBService } from '../../infra/RxDB/eventWithRxDB.service';
import { Event } from '../../infra/domain-model/event.model';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationComponent implements OnInit {
  constructor(
    private router: Router,
    public eventWithRXDBService: EventWithRXDBService
  ) {}
  events: Event[] = [];
  events$ = signal(this.events);
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    eventClick: this.handleEventClick.bind(this),
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
          this.router.navigate(['/event/register']);
        },
      },
      selectPlaceButton: {
        text: '場所を選択',
        click: () => {
          console.log('selectPlaceButton');
        },
      },
    },
  };

  ngOnInit() {
    console.log('ngOnInit');
    this.eventWithRXDBService.findAllEvents().then((events) => {
      if (events) {
        const result: unknown = events.map((event) => {
          const id = event._data.id;
          const start = JSON.parse(event._data.startStr);
          const end = JSON.parse(event._data.endStr);
          const date = JSON.parse(event._data.dateStr);
          const startHours = start.hours < 10 ? `0${start.hours}` : start.hours;
          const endHours = end.hours < 10 ? `0${end.hours}` : end.hours;
          const startMinutes =
            start.minutes < 10 ? `0${start.minutes}` : start.minutes;
          const endMinutes = end.minutes < 10 ? `0${end.minutes}` : end.minutes;

          return {
            id: id,
            title: event._data.title,
            start: `${date}T${startHours}:${startMinutes}:00`,
            end: `${date}T${endHours}:${endMinutes}:00`,
          };
        });
        this.events$.set(result as Event[]);
      }
    });
  }

  handleEventClick(event: EventClickArg) {
    this.eventWithRXDBService.deleteById(event.event.id).then(() => {
      this.events$.update((changedEvent) =>
        changedEvent.filter((e) => e.id !== event.event.id)
      );
    });
  }
}
