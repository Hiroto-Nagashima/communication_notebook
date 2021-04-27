# Communication Notebook
## Overview

保育園の連絡帳アプリの練習版です。

## Description

- 今回は認証機能を導入していないので、入力したid（1 or 2）をContext APIを使ってグローバルなstateとして扱い、ログインをしているかのような動きを取り入れています。
- Delete以外の基本的なCRUD処理の動きを導入しています。具体的には連絡帳の作成、更新、過去の連絡帳の取得などができます。
- ユーザー（Kid）登録機能もないので、データをあらかじめseedファイルで入れています。

## Setup
### API
```
$ docker-compose build
$ docker-compose up
```
http://localhost:xxxx でAPIサーバが起動します
### Frontend
```
$ cd frontend
$ yarn install
$ yarn start
```
http://localhost:xxxx でWebpackサーバが起動します
## Languages
- frontend
  - React
  - TypeScript
- backend
  - Ruby on Rails
- others
  - Docker
  - MySQL


## Unit Test
- モデル、APIのテストをRSpecを使って実施しています
- Kidを登録する機能はありませんが、練習を兼ねてKidモデルのバリデーションテストも実施しています
- 以下のコマンドで実行できます
```
$ docker-compose run app bundle exec rspec
```
## Storybook
- atomic designに基づきコンポーネントを設計しました。全コンポーネントのうち、atoms、molecules、organismsに該当するコンポーネントのStorybookを作成しています。
- 以下のコマンドで実行できます
```
$ cd frontend
$ yarn storybook
```
## Swagger
- Swaggerを使ってAPI設計をしました。VSCodeの拡張機能「Swagger Viewer」を使用しています。コードはルートディレクトリ直下の`swagger.yml`に記載しています。
- 以下の手順で実行してください
1. VSCodeで拡張機能`Swagger Viewer`をインストール
2. `Shift+command+p`でコマンドパレットを開く(Windowsは`Shift+Alt+p`)
3. コマンドパレットから`Preview Swagger`を選択