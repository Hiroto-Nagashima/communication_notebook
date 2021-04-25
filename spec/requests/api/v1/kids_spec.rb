require 'rails_helper'

RSpec.describe "Api::V1::Kids", type: :request do
  describe "GET /api/v1/kids" do
    it '入力したidを持った子供のデータ取得' do
      kid = create(:kid, name: '高田弘樹')

      get "/api/v1/kids/#{kid.id}"
      json = JSON.parse(response.body)

      # リクエスト成功を表す200が返ってきたか確認する。
      expect(response.status).to eq(200)

      # 要求した特定のポストのみ取得した事を確認する
      expect(json['data']['name']).to eq(kid.name)
    end
  end
end
