import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { provinces, Province } from 'src/app/infra/base-model/area.model';
import { prefectures, Prefecture } from 'src/app/infra/base-model/area.model';
import { UserWithRXDBService } from 'src/app/infra/RxDB/userWithRxDB.service';
import { AuthService } from '../user/auth.service';
import { User, userSchema } from '../../infra/domain-model/user.model';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
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

  constructor(
    readonly userWithRxDB: UserWithRXDBService,
    readonly auth: AuthService
  ) {}

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

  userValidation(value: unknown) {
    console.log('userValidation()');
    const ajv = new Ajv();
    addFormats(ajv);
    const validate = ajv.compile(userSchema);
    return validate(value);
  }

  saveNewUser() {
    console.log('saveNewUser()');
    const newUserObj = {
      id: this.auth.anonymousAccountID(),
      name: this.userForm.get('nameValue')?.value,
      email: this.userForm.get('emailValue')?.value,
      role: 'admin',
    };

    if (!this.userValidation(newUserObj)) return;

    console.log('add user');
    this.userWithRxDB
      .insertUser(newUserObj as User)
      .then((doc) => {
        // saved data
        console.log(doc._data);
      })
      .catch((err) => {
        // handle error
        console.log(err);
      });
  }
}
