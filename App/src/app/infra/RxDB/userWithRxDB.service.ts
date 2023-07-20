import { Injectable } from '@angular/core';
import { User } from '../../infra/domain-model/user.model';
import { RxDBService } from '../../infra/RxDB/rxDB.service';

@Injectable({
  providedIn: 'root',
})
export class UserWithRXDBService {
  constructor(private rxDB: RxDBService) {}
  async insertUser(user: User) {
    const usersCollection = await this.rxDB.usersCollection$();
    const doc = await usersCollection?.users.insert(user);
    return doc;
  }

  async findAllUsers() {
    const usersCollection = await this.rxDB.usersCollection$();
    const docs = await usersCollection?.users.find().exec();
    return docs;
  }
}
