import { JSONSchemaType } from 'ajv';

type User = {
  id: string;
  name: string;
  email: string;
};

type AnonymousUser = {
  id: string;
};

export const userSchema: JSONSchemaType<User> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    name: { type: 'string' },
    email: { type: 'string', format: 'email' },
  },
  required: ['id', 'name'],
  additionalProperties: false,
};

export const anonymousUserSchema: JSONSchemaType<AnonymousUser> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
  },
  required: ['id'],
  additionalProperties: false,
};
