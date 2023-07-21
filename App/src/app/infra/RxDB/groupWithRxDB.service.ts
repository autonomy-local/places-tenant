import { Injectable } from '@angular/core';
import { Group } from '../../infra/domain-model/group.model';
import { RxDBService } from '../../infra/RxDB/rxDB.service';

@Injectable({
  providedIn: 'root',
})
export class GroupWithRXDBService {
  constructor(private rxDB: RxDBService) {}
  async insertGroup(group: Group) {
    const groupsCollection = await this.rxDB.groupsCollection$();
    const doc = await groupsCollection?.groups.insert(group);
    return doc;
  }

  async findAllGroups() {
    const groupsCollection = await this.rxDB.groupsCollection$();
    const docs = await groupsCollection?.groups.find().exec();
    return docs;
  }
}
