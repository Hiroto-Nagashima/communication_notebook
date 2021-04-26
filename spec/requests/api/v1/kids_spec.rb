require 'rails_helper'

RSpec.describe "Api::V1::Kids", type: :request do
  describe "GET /api/v1/kids" do
    it '入力したidを持った子供のデータ取得' do
      kid = create(:kid)
      get "/api/v1/kids/#{kid.id}"
      json = JSON.parse(response.body)
      expect(response.status).to eq(200)
      expect(json['name']).to eq(kid.name)
    end
  end
end
