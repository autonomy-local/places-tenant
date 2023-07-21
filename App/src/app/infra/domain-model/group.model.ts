import { JSONSchemaType } from 'ajv';
export type Group = {
  id: string;
  name: string;
  province: string; // 道州
  prefecture: string; // 府県
  city: string; // 市町村
  email: string;
  mobilePhone: string;
};

export const groupSchema: JSONSchemaType<Group> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    province: { type: 'string' },
    prefecture: { type: 'string' },
    city: { type: 'string' },
    email: { type: 'string' },
    mobilePhone: { type: 'string' },
  },
  required: ['id', 'name'],
  additionalProperties: false,
};
