import { JSONSchemaType } from 'ajv';
export type Place = {
  id: string;
  name: string;
  province: string; // 道州
  prefecture: string; // 府県
  city: string; // 市町村
  address: string; // 住所
};

export const placeSchema: JSONSchemaType<Place> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    province: { type: 'string' },
    prefecture: { type: 'string' },
    city: { type: 'string' },
    address: { type: 'string' },
  },
  required: ['id', 'name', 'province', 'prefecture', 'city', 'address'],
  additionalProperties: false,
};
