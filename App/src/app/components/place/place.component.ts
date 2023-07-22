import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  signal,
} from '@angular/core';
import { PlaceWithRXDBService } from '../../infra/RxDB/placeWithRxDB.service';
import { Place } from '../../infra/domain-model/place.model';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceComponent implements OnInit {
  constructor(public placeWithRXDBService: PlaceWithRXDBService) {}
  places: Place[] = [];
  columns = ['名称', '住所'];
  places$ = signal(this.places);
  ngOnInit(): void {
    console.log('ngOnInit');
    this.placeWithRXDBService.findAllPlaces().then((places) => {
      if (places) {
        this.places = places.map((place) => place._data) as Place[];
        console.log(this.places);
        this.places$.set(this.places);
      }
    });
  }
}
