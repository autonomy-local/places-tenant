// GIFのコアデータパーツ
// [参照](https://github.com/JDA-DM/GIF/tree/main/440_%E3%82%B3%E3%82%A2%E3%83%87%E3%83%BC%E3%82%BF%E3%83%91%E3%83%BC%E3%83%84)
// 日付時刻
// 住所（アドレス）
// TODO: データモデルから表示への変換表のデータを別途整理追加する

import { JSONSchemaType } from 'ajv';

type GIF_Date = {
  year: number; // 西暦4桁
  month: number; // 月2桁 01-12
  day: number; // 日2桁 01-31
};

export const gifDateSchema: JSONSchemaType<GIF_Date> = {
  type: 'object',
  properties: {
    year: { type: 'number' },
    month: { type: 'number' },
    day: { type: 'number' },
  },
  required: ['year', 'month', 'day'],
  additionalProperties: false,
};

type GIF_DayWeek = {
  dayWeekCode: number; // 曜日コード 1-7
  dayWeekName: string; // 曜日名
};

export const gifDayWeekSchema: JSONSchemaType<GIF_DayWeek> = {
  type: 'object',
  properties: {
    dayWeekCode: { type: 'number' },
    dayWeekName: { type: 'string' },
  },
  required: ['dayWeekCode', 'dayWeekName'],
  additionalProperties: false,
};

type GIF_Time = {
  hour: number; // 時2桁 01-24
  minute: number; // 分2桁 00-59
  second: number; // 秒2桁 00-59
};

export const gifTimeSchema: JSONSchemaType<GIF_Time> = {
  type: 'object',
  properties: {
    hour: { type: 'number' },
    minute: { type: 'number' },
    second: { type: 'number' },
  },
  required: ['hour', 'minute', 'second'],
  additionalProperties: false,
};

export type GIF_DateRange = {
  from: GIF_Date;
  to: GIF_Date;
};

export const gifDateRangeSchema: JSONSchemaType<GIF_DateRange> = {
  type: 'object',
  properties: {
    from: gifDateSchema,
    to: gifDateSchema,
  },
  required: ['from', 'to'],
  additionalProperties: false,
};

export type GIF_TimeRange = {
  from: GIF_Time;
  to: GIF_Time;
};

export const gifTimeRangeSchema: JSONSchemaType<GIF_TimeRange> = {
  type: 'object',
  properties: {
    from: gifTimeSchema,
    to: gifTimeSchema,
  },
  required: ['from', 'to'],
  additionalProperties: false,
};

export type GIF_Address = {
  localGovernmentCode: string; // 全国地方公共団体コード
  townAzaID: string; // 町字ID
  address: string; // 住所
};

export const gifAddressSchema: JSONSchemaType<GIF_Address> = {
  type: 'object',
  properties: {
    localGovernmentCode: { type: 'string' },
    townAzaID: { type: 'string' },
    address: { type: 'string' },
  },
  required: ['localGovernmentCode', 'townAzaID', 'address'],
  additionalProperties: false,
};
