import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { provinces, Province } from 'src/app/infra/base-model/area.model';
import { prefectures, Prefecture } from 'src/app/infra/base-model/area.model';

@Component({
  selector: 'app-group-register',
  templateUrl: './group-register.component.html',
  styleUrls: ['./group-register.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupRegisterComponent implements OnInit {
  readonly provinceItems = provinces;
  public prefectureItems = prefectures;
  readonly provinceFilter = ({ name }: Province): string => name;
  readonly prefectureFilter = ({ name }: Prefecture): string => name;

  groupForm = new FormGroup({
    nameValue: new FormControl('', [Validators.required]),
    emailValue: new FormControl('', [Validators.required]),
    mobilePhoneValue: new FormControl('', [Validators.required]),
    provinceValue: new FormControl({} as Province, [Validators.required]),
    prefectureValue: new FormControl({} as Prefecture, [Validators.required]),
    cityValue: new FormControl('', [Validators.required]),
  });

  constructor() {}

  ngOnInit() {
    this.filter();
  }
  filter() {
    this.groupForm.get('provinceValue')?.valueChanges.subscribe((value) => {
      if (!value) return;
      const filteredPrefectures = prefectures.filter(
        (item) => item.provinceId === value?.id
      );
      this.prefectureItems = filteredPrefectures;
      this.groupForm.get('prefectureValue')?.setValue(null);
    });
  }
}
