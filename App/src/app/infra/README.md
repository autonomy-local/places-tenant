# Infra
ローカルDBやバックエンドサービスとの通信を行うためのモジュールです。

## ディレクトリ構成
```
infra
├── api
│
├── db
│
├── repository
│
└── README.md
```

## ディレクトリ説明
### api
バックエンドサービスとの通信を行うためのモジュールです。

### db
ローカルDBとの通信を行うためのモジュールです。

### repository
APIやDBから取得したデータをアプリケーションで利用できるように変換するためのモジュールです。

## Ajv and JSON Schema

- [Ajv](https://ajv.js.org/)
- [JSON Type Definition](https://jsontypedef.com/)
- [JSON Schema](https://json-schema.org/)

## API

- [OpenAPI](https://swagger.io/specification/)
- [GraphQL](https://graphql.org/)
- [gRPC](https://grpc.io/)
- [tRPC](https://trpc.io/)

## DB
- [RxDB](https://rxdb.info/)
- [Firebase](https://firebase.google.com/)
- [Supabase](https://supabase.io/)

## Data Structure
- Collection > Document > Field 構成とする
- Collection は複数の Document を持つ
- Document は複数の Field を持つ
- Field は単一のデータを持つ
- Collection は Document の集合として扱う
- Document は Field の集合として扱う
- Field は単一のデータとして扱う

## Data Type

## Domain Data Type

### Account
- Authサービスが管理する単位
- ユーザーがログインする際に利用する
- ユーザーのメールアドレスとパスワードを持つ

### Group
- 所属ユーザーがいない場合がある（Webサービスを利用しない。窓口申込のみの場合など）
- 所属ユーザーがいる場合は、所属ユーザーの中で1人が代表者となる
- 所属ユーザーが複数いる場合がある

### Place
- 施設情報
- 1つの施設に複数の場所がある場合がある
- 1つの施設に複数の備品がある場合がある
- 鍵の情報が紐づく
- 施設のメンテナンス情報が紐づく
