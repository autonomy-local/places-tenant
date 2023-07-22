import { Injectable } from '@angular/core';
import { Place } from '../../infra/domain-model/place.model';
import { RxDBService } from '../../infra/RxDB/rxDB.service';

@Injectable({
  providedIn: 'root',
})
export class PlaceWithRXDBService {
  constructor(private rxDB: RxDBService) {}
  async insertPlace(place: Place) {
    const placesCollection = await this.rxDB.placesCollection$();
    const doc = await placesCollection?.places.insert(place);
    return doc;
  }

  async findAllPlaces() {
    const placesCollection = await this.rxDB.placesCollection$();
    const docs = await placesCollection?.places.find().exec();
    return docs;
  }
}
