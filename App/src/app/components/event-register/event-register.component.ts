import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';
import { EventWithRXDBService } from '../../infra/RxDB/eventWithRxDB.service';
import { Event } from '../../infra/domain-model/event.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventRegisterComponent {
  constructor(
    readonly eventWithRxDB: EventWithRXDBService,
    private router: Router
  ) {}
  now = new Date().toLocaleDateString('ja-JP');
  dateArray = this.now.split('/');

  eventForm = new FormGroup({
    nameValue: new FormControl('', [Validators.required]),
    dateValue: new FormControl(
      new TuiDay(
        Number(this.dateArray[0]),
        Number(this.dateArray[1]) - 1,
        Number(this.dateArray[2])
      ),
      [Validators.required]
    ),
    startTimeValue: new FormControl('', [Validators.required]),
    endTimeValue: new FormControl('', [Validators.required]),
    placeValue: new FormControl('', [Validators.required]),
    contentValue: new FormControl('', [Validators.required]),
    feeValue: new FormControl('', [Validators.required]),
    capacityValue: new FormControl('', [Validators.required]),
  });

  saveNewEvent() {
    const newEvent: unknown = {
      id: self.crypto.randomUUID(),
      title: this.eventForm.get('nameValue')?.value,
      dateStr: JSON.stringify(this.eventForm.get('dateValue')?.value),
      startStr: JSON.stringify(this.eventForm.get('startTimeValue')?.value),
      endStr: JSON.stringify(this.eventForm.get('endTimeValue')?.value),
    };
    this.eventWithRxDB
      .insertEvent(newEvent as Event)
      .then((doc) => {
        console.log(doc);
        this.eventForm.reset();
        this.router.navigate(['/reservation']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
