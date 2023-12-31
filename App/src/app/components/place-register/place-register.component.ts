import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { provinces, Province } from 'src/app/infra/base-model/area.model';
import { prefectures, Prefecture } from 'src/app/infra/base-model/area.model';
import { PlaceWithRXDBService } from '../../infra/RxDB/placeWithRxDB.service';
import { Place, placeSchema } from '../../infra/domain-model/place.model';
import Ajv from 'ajv/dist/core';
import addFormats from 'ajv-formats';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-register',
  templateUrl: './place-register.component.html',
  styleUrls: ['./place-register.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceRegisterComponent implements OnInit {
  readonly provinceItems = provinces;
  public prefectureItems = prefectures;
  readonly provinceFilter = ({ name }: Province): string => name;
  readonly prefectureFilter = ({ name }: Prefecture): string => name;

  placeForm = new FormGroup({
    nameValue: new FormControl('', [Validators.required]),
    provinceValue: new FormControl(
      {
        id: 'dummy',
        name: '中国',
      } as Province,
      [Validators.required]
    ),
    prefectureValue: new FormControl(
      {
        id: 'dummy',
        name: '広島県',
      } as Prefecture,
      [Validators.required]
    ),
    cityValue: new FormControl('', [Validators.required]),
    addressValue: new FormControl('', [Validators.required]),
  });

  constructor(
    readonly placeWithRxDB: PlaceWithRXDBService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filter();
  }
  filter() {
    this.placeForm.get('provinceValue')?.valueChanges.subscribe((value) => {
      if (!value) return;
      const filteredPrefectures = prefectures.filter(
        (item) => item.provinceId === value?.id
      );
      this.prefectureItems = filteredPrefectures;
      this.placeForm.get('prefectureValue')?.setValue(null);
    });
  }

  placeValidation(value: unknown) {
    const ajv = new Ajv();
    addFormats(ajv);
    const validate = ajv.compile(placeSchema);
    const valid = validate(value);
    if (!valid) {
      console.log(validate.errors);
    }
    return valid;
  }

  saveNewPlace() {
    const newPlaceObj = {
      id: self.crypto.randomUUID(),
      name: this.placeForm.get('nameValue')?.value,
      province: this.placeForm.get('provinceValue')?.value?.name,
      prefecture: this.placeForm.get('prefectureValue')?.value?.name,
      city: this.placeForm.get('cityValue')?.value,
      address: this.placeForm.get('addressValue')?.value,
    };

    // if (!this.placeValidation(place)) return;
    this.placeWithRxDB
      .insertPlace(newPlaceObj as Place)
      .then((doc) => {
        console.log(doc);
        this.placeForm.reset();
        this.router.navigate(['/place']);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
