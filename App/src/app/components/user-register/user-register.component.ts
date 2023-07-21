/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { provinces, Province } from 'src/app/infra/base-model/area.model';
import { prefectures, Prefecture } from 'src/app/infra/base-model/area.model';
import { UserWithRXDBService } from 'src/app/infra/RxDB/userWithRxDB.service';
import { TenantWithRXDBService } from 'src/app/infra/RxDB/tenantWithRxDB.service';
import { AuthService } from '../user/auth.service';
import { User, userSchema } from '../../infra/domain-model/user.model';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { Tenant, tenantSchema } from '../../infra/domain-model/tenant.model';
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
    provinceValue: new FormControl({} as Province, [Validators.required]),
    prefectureValue: new FormControl({} as Prefecture, [Validators.required]),
    cityValue: new FormControl('', [Validators.required]),
  });
  public prefectureItems = prefectures;

  constructor(
    readonly userWithRxDB: UserWithRXDBService,
    readonly tenantWithRxDB: TenantWithRXDBService,
    readonly auth: AuthService
  ) {}

  ngOnInit() {
    this.filter();
  }
  filter() {
    this.tenantForm.get('provinceValue')?.valueChanges.subscribe((value) => {
      if (!value) return;
      const filteredPrefectures = prefectures.filter(
        (item) => item.provinceId === value?.id
      );
      this.prefectureItems = filteredPrefectures;
      this.tenantForm.get('prefectureValue')?.setValue(null);
    });
  }

  userValidation(value: unknown) {
    const ajv = new Ajv();
    addFormats(ajv);
    const validate = ajv.compile(userSchema);
    return validate(value);
  }

  tenantValidation(value: unknown) {
    const ajv = new Ajv();
    addFormats(ajv);
    const validate = ajv.compile(tenantSchema);
    return validate(value);
  }

  saveNewUser() {
    const newUserObj: unknown = {
      id: this.auth.anonymousAccountID(),
      name: this.userForm.get('nameValue')?.value,
      email: this.userForm.get('emailValue')?.value,
      role: 'admin',
    };
    const newTenantObj: unknown = {
      id: this.auth.anonymousAccountID(),
      name: this.tenantForm.get('nameValue')?.value,
      province: this.tenantForm.get('provinceValue')?.value?.name,
      prefecture: this.tenantForm.get('prefectureValue')?.value?.name,
      city: this.tenantForm.get('cityValue')?.value,
      orgStatus: 'active',
      isOrgFlag: this.tenantForm.get('orgFlagValue')?.value,
      isIndividualFlag: this.tenantForm.get('individualFlagValue')?.value,
      isTerritorialFlag: this.tenantForm.get('territorialFlagValue')?.value,
    };

    if (!this.userValidation(newUserObj)) return;
    if (!this.tenantValidation(newTenantObj)) return;

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
    this.tenantWithRxDB
      .insertTenant(newTenantObj as Tenant)
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
