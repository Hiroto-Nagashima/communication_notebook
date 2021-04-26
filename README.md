# Communication Notebook
## Overview

保育園の連絡帳アプリの練習版です。

## Description

- 今回は認証機能を導入していないので、入力したid（1 or 2）をContext APIを使ってグローバルなstateとして扱い、ログインをしているかのような動きを取り入れています。
- Delete以外の基本的なCRUD処理の動きを導入しています。具体的には連絡帳の作成、更新、過去の連絡帳の取得などができます。
- ユーザー（Kid）登録機能もないので、データをあらかじめseedファイルで入れています。

## Setup
`$ git clone https://github.com/Hiroto-Nagashima/communication_notebook.git`
<br>
 `$ cd communication_notebook`
 <br>
 `$ cd frontend //reactのディレクトリに移動`
 <br>
 `$ yarn install`
 <br>
 `$ yarn start`

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
<br>
`docker-compose run app bundle exec rspec`