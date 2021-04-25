require 'rails_helper'

RSpec.describe "Api::V1::CommunicationNotebooks", type: :request do
  let(:kid){create :kid}
  describe "GET /api/v1/kids/:id/communication_notebooks" do
    it "ある子供に紐づく連絡帳を全て取得するAPI" do
      FactoryBot.create_list(:communication_notebook, 10, kid_id:kid.id)
      get "/api/v1/kids/#{kid.id}/communication_notebooks"
      json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(json.size).to eq 10
    end
  end
  describe "GET /api/v1/kids/:id/communication_notebooks/edit" do
    it "ある子供に紐づく連絡帳を全て取得するAPI" do
      FactoryBot.create_list(:communication_notebook, 3, kid_id:kid.id, date: "2021-4-26")
      get "/api/v1/kids/#{kid.id}/communication_notebooks/edit"
      target_date = "2021-04-26xxxxxxxxx"
      json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(json.size).to eq 3
    end
  end
end
