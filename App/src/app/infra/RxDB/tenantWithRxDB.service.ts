import { Injectable } from '@angular/core';
import { Tenant } from '../../infra/domain-model/tenant.model';
import { RxDBService } from '../../infra/RxDB/rxDB.service';

@Injectable({
  providedIn: 'root',
})
export class TenantWithRXDBService {
  constructor(private rxDB: RxDBService) {}
  async insertTenant(tenant: Tenant) {
    const tenantsCollection = await this.rxDB.tenantsCollection$();
    const doc = await tenantsCollection?.tenants.insert(tenant);
    return doc;
  }

  async findAllTenants() {
    const tenantsCollection = await this.rxDB.tenantsCollection$();
    const docs = await tenantsCollection?.tenants.find().exec();
    return docs;
  }
}
