// init RxDB
import { Injectable, signal } from '@angular/core';
import { RxCollection, createRxDatabase } from 'rxdb';
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie';
import { wrappedValidateAjvStorage } from 'rxdb/plugins/validate-ajv';
import { userSchema } from '../domain-model/user.model';
import { tenantSchema } from '../domain-model/tenant.model';

@Injectable({
  providedIn: 'root',
})
export class RxDBService {
  constructor() {}

  readonly usersCollection$ = signal({} as { users: RxCollection } | undefined);
  readonly tenantsCollection$ = signal(
    {} as { tenants: RxCollection } | undefined
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
  }
}
