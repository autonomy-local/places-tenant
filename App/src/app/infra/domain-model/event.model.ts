import { JSONSchemaType } from 'ajv';
export type Event = {
  id: string;
  title: string;
  dateStr: string;
  startStr: string;
  endStr: string;
};

export const eventSchema: JSONSchemaType<Event> = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    dateStr: { type: 'string', format: 'date-time' },
    startStr: { type: 'string', format: 'date-time' },
    endStr: { type: 'string', format: 'date-time' },
  },
  required: ['id'],
  additionalProperties: false,
};
