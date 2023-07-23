import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TuiDay } from '@taiga-ui/cdk';

@Component({
  selector: 'app-event-register',
  templateUrl: './event-register.component.html',
  styleUrls: ['./event-register.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventRegisterComponent {
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
}
