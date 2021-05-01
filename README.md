# Communication Notebook
## Overview

保育園の連絡帳アプリの練習版です。

## Description

- 今回は認証機能を導入していないので、入力したid（1 or 2）をContext APIを使ってグローバルなstateとして扱い、ログインをしているかのような動きを取り入れています。
- Delete以外の基本的なCRUD処理の動きを導入しています。具体的には連絡帳の作成、更新、過去の連絡帳の取得などができます。
- ユーザー（Kid）登録機能もないので、データをあらかじめseedファイルで入れています。
- SwaggerでREST APIを設計しています

## Setup
### API
```
$ docker-compose build
$ docker-compose up
```
http://localhost:3000 でAPIサーバが起動します
### Frontend
```
$ cd frontend
$ yarn install
$ yarn start
```
http://localhost:3001 でWebpackサーバが起動します
## Technology stack
- frontend
  - React
  - TypeScript
- backend
  - Ruby on Rails
- style
  - styled-components
- test
  - Rspec
- infrastructure
  - Docker
  - MySQL


## Unit Test
- モデル、APIのテストをRSpecを使って実施しています
- Kidを登録する機能はありませんが、練習を兼ねてKidモデルのバリデーションテストも実施しています
- 以下のコマンドで実行できます
```
$ docker-compose run --rm app bundle exec rspec
```
## Storybook
- atomic designに基づきコンポーネントを設計しました。全コンポーネントのうち、atoms、molecules、organismsに該当するコンポーネントのStorybookを作成しています。
- 以下のコマンドで実行できます
```
$ cd frontend
$ yarn storybook
```
