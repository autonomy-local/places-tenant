// init RxDB
import { Injectable, signal } from '@angular/core';
import { RxCollection, createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { wrappedValidateAjvStorage } from 'rxdb/plugins/validate-ajv';
import { userSchema } from '../domain-model/user.model';
import { tenantSchema } from '../domain-model/tenant.model';
import { groupSchema } from '../domain-model/group.model';
import { placeSchema } from '../domain-model/place.model';

@Injectable({
  providedIn: 'root',
})
export class RxDBService {
  constructor() {}

  readonly usersCollection$ = signal({} as { users: RxCollection } | undefined);
  readonly tenantsCollection$ = signal(
    {} as { tenants: RxCollection } | undefined
  );
  readonly groupsCollection$ = signal(
    {} as { groups: RxCollection } | undefined
  );
  readonly placesCollection$ = signal(
    {} as { places: RxCollection } | undefined
  );

  async init() {
    const storage = wrappedValidateAjvStorage({
      storage: getRxStorageDexie(),
    });
    const database = await createRxDatabase({
      name: 'mydb',
      storage,
    });
    const usersCollection = await database.addCollections({
      users: {
        schema: {
          version: 0,
          type: userSchema.type,
          primaryKey: 'id',
          properties: userSchema.properties,
        },
      },
    });
    this.usersCollection$.set(usersCollection);
    const tenantsCollection = await database.addCollections({
      tenants: {
        schema: {
          version: 0,
          type: tenantSchema.type,
          primaryKey: 'id',
          properties: tenantSchema.properties,
        },
      },
    });
    this.tenantsCollection$.set(tenantsCollection);
    const groupsCollection = await database.addCollections({
      groups: {
        schema: {
          version: 0,
          type: groupSchema.type,
          primaryKey: 'id',
          properties: groupSchema.properties,
        },
      },
    });
    this.groupsCollection$.set(groupsCollection);
    const placesCollection = await database.addCollections({
      places: {
        schema: {
          version: 0,
          type: placeSchema.type,
          primaryKey: 'id',
          properties: placeSchema.properties,
        },
      },
    });
    this.placesCollection$.set(placesCollection);
  }
}
