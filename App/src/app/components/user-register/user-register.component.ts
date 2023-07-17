import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { provinces, Province } from 'src/app/infra/area.model';
import { prefectures, Prefecture } from 'src/app/infra/area.model';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRegisterComponent implements OnInit {
  readonly provinceItems = provinces;
  readonly provinceFilter = ({ name }: Province): string => name;
  readonly prefectureFilter = ({ name }: Prefecture): string => name;
  userForm = new FormGroup({
    nameValue: new FormControl('', [Validators.required]),
    emailValue: new FormControl('', [Validators.required]),
  });
  tenantForm = new FormGroup({
    nameValue: new FormControl('', [Validators.required]),
    orgFlagValue: new FormControl('', [Validators.required]),
    individualFlagValue: new FormControl('', [Validators.required]),
    territorialFlagValue: new FormControl('', [Validators.required]),
    provinceValue: new FormControl(null, [Validators.required]),
    prefectureValue: new FormControl(null, [Validators.required]),
  });
  public prefectureItems = prefectures;

  constructor() {}

  ngOnInit() {
    this.filter();
  }
  filter() {
    this.tenantForm
      .get('provinceValue')
      ?.valueChanges.subscribe((value: Prefecture | null) => {
        if (!value) return;
        const filteredPrefectures = prefectures.filter(
          (item) => item.provinceId === value?.id
        );
        this.prefectureItems = filteredPrefectures;
        this.tenantForm.get('prefectureValue')?.setValue(null);
      });
  }
}
