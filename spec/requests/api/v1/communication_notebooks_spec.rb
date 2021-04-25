require 'rails_helper'

RSpec.describe "Api::V1::CommunicationNotebooks", type: :request do
  let(:kid){create :kid}
  describe "GET /api/v1/kids/:id/communication_notebooks" do
    xit "ある子供に紐づく連絡帳を全て取得するAPI" do
      FactoryBot.create_list(:communication_notebook, 10, kid_id:kid.id)
      get "/api/v1/kids/#{kid.id}/communication_notebooks"
      json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(response.body.size).to eq 10
    end
  end
  describe "GET /api/v1/kids/:id/communication_notebooks/edit" do
    it "ある子供に紐づく連絡帳を全て取得するAPI" do
      get "/api/v1/kids/#{kid.id}/communication_notebooks/"
      target_date = "2021-04-25xxxxxxxxx"
      new_date = target_date.slice(0..9)
      communication_notebook = CommunicationNotebook.where(date: target_date)
      FactoryBot.create_list(:communication_notebook, 10, kid_id:kid.id)
      json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(response.body.size).to eq 10
    end
  end
end
