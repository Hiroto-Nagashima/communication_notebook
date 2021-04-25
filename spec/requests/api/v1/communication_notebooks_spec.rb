require 'rails_helper'

RSpec.describe "Api::V1::CommunicationNotebooks", type: :request do
  let(:kid)(build :kid)
  describe "GET /api/v1/kids/:id/communication_notebooks" do
    it "ある子供に紐づく連絡帳を全て取得するAPI" do
      get /api/v1/kids/:id/communication_notebooks
      json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(json['name']).to eq(kid.name)
    end
  end
end
