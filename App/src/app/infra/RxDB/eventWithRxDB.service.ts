import { Injectable } from '@angular/core';
import { Event } from '../../infra/domain-model/event.model';
import { RxDBService } from '../../infra/RxDB/rxDB.service';

@Injectable({
  providedIn: 'root',
})
export class EventWithRXDBService {
  constructor(private rxDB: RxDBService) {}
  async insertEvent(event: Event) {
    const eventsCollection = await this.rxDB.eventsCollection$();
    const doc = await eventsCollection?.events.insert(event);
    return doc;
  }

  async findAllEvents() {
    const eventsCollection = await this.rxDB.eventsCollection$();
    const docs = await eventsCollection?.events.find().exec();
    return docs;
  }

  async findById(id: string) {
    const eventsCollection = await this.rxDB.eventsCollection$();
    const doc = await eventsCollection?.events.findOne(id).exec();
    return doc;
  }

  async deleteById(id: string) {
    const eventsCollection = await this.rxDB.eventsCollection$();
    const doc = await eventsCollection?.events.findOne(id).exec();
    await doc?.remove();
  }
}
