import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { provinces, Province } from 'src/app/infra/base-model/area.model';
import { prefectures, Prefecture } from 'src/app/infra/base-model/area.model';
import { GroupWithRXDBService } from 'src/app/infra/RxDB/groupWithRxDB.service';
import { Group, groupSchema } from '../../infra/domain-model/group.model';
import Ajv from 'ajv/dist/core';
import addFormats from 'ajv-formats';

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

  constructor(readonly groupWithRxDB: GroupWithRXDBService) {}

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

  groupValidation(value: unknown) {
    const ajv = new Ajv();
    addFormats(ajv);
    const validate = ajv.compile(groupSchema);
    const valid = validate(value);
    if (!valid) {
      console.log(validate.errors);
    }
    return valid;
  }

  saveNewGroup() {
    const newGroupObj: unknown = {
      name: this.groupForm.get('nameValue')?.value,
      email: this.groupForm.get('emailValue')?.value,
      mobilePhone: this.groupForm.get('mobilePhoneValue')?.value,
      province: this.groupForm.get('provinceValue')?.value,
      prefecture: this.groupForm.get('prefectureValue')?.value,
      city: this.groupForm.get('cityValue')?.value,
    };

    if (!this.groupValidation(newGroupObj)) return;

    this.groupWithRxDB
      .insertGroup(newGroupObj as Group)
      .then((doc) => {
        console.log(doc);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
