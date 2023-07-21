import { JSONSchemaType } from 'ajv';
export type Tenant = {
  id: string;
  name: string;
  province: string; // 道州
  prefecture: string; // 府県
  city: string; // 市町村
  orgStatus: 'active' | 'inactive';
  // isOrgFlag: false, isAssociationFlag: false なら自然人
  isOrgFlag: boolean; // 法人か？ isOrgFlag: true なら法人
  isIndividualFlag: boolean; // 自然人の団体か？ isAssociationFlag: true なら自然人の団体
  isTerritorialFlag: { self: boolean; gov: boolean }; // 地縁か？ selfは自己申告 govは所在の市町村による判定
};

type Org = {
  id: string; // GBizID
  name: string; // 法人名
  classification: string; // 法人の種類
  tenantId: string; // テナントID
};

export const tenantSchema: JSONSchemaType<Tenant> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    province: { type: 'string' },
    prefecture: { type: 'string' },
    city: { type: 'string' },
    orgStatus: { type: 'string', enum: ['active', 'inactive'] },
    isOrgFlag: { type: 'boolean' },
    isIndividualFlag: { type: 'boolean' },
    isTerritorialFlag: {
      type: 'object',
      properties: {
        self: { type: 'boolean' },
        gov: { type: 'boolean' },
      },
      required: ['self', 'gov'],
      additionalProperties: false,
    },
  },
  required: ['id', 'name'],
  additionalProperties: false,
};

export const orgSchema: JSONSchemaType<Org> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    classification: { type: 'string' },
    tenantId: { type: 'string' },
  },
  required: ['id', 'name', 'classification', 'tenantId'],
  additionalProperties: false,
};
