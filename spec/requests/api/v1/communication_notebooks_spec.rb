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
      FactoryBot.create_list(:communication_notebook, 10, kid_id:kid.id, date: "2021-4-26")
      FactoryBot.create_list(:communication_notebook, 3, kid_id:kid.id, date: "2021-4-27")
      get "/api/v1/kids/#{kid.id}/communication_notebooks/edit", params:{ target_date: "2021-04-26xxxxxxxxx"}
      json = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(json.size).to eq 10
    end
  end
  describe "GET /api/v1/kids/:id/communication_notebooks/new" do
    context "ある日付の連絡帳が既に存在しているかチェックするAPI" do
      it "ある日付の連絡帳が既に存在している場合のレスポンス" do
        FactoryBot.create(:communication_notebook, kid_id:kid.id, date: "2021-4-26")
        get "/api/v1/kids/#{kid.id}/communication_notebooks/new", params:{ target_date: "2021-04-26xxxxxxxxx"}
        expect(response).to have_http_status(200)
        expect(response.body).to include "already exist"
      end
      it "ある日付の連絡帳がまだ存在していない場合のレスポンス" do
        FactoryBot.create(:communication_notebook, kid_id:kid.id, date: "2021-4-26")
        get "/api/v1/kids/#{kid.id}/communication_notebooks/new", params:{ target_date: "2021-04-30xxxxxxxxx"}
        expect(response).to have_http_status(200)
        expect(response.body).to include "no data"
      end
    end
  end
  describe "Post /api/v1/kids/:id/communication_notebooks/" do
    it "ある子供に紐づく連絡帳を登録するAPI" do
      valid_params= attributes_for(:communication_notebook)
      expect { post "/api/v1/kids/#{kid.id}/communication_notebooks", params:{communication_notebook: valid_params }}
      .to change(CommunicationNotebook, :count).by(+1)
      expect(response).to have_http_status(200)
    end
  end
  describe "Put /api/v1/kids/:id/communication_notebooks/:id" do
    it "ある子供に紐づく連絡帳を更新するAPI" do
      # valid_params= attributes_for(:communication_notebook)
      # expect { post "/api/v1/kids/#{kid.id}/communication_notebooks", params:{communication_notebook: valid_params }}
      # .to change(CommunicationNotebook, :count).by(+1)
      # expect(response).to have_http_status(200)
    end
  end
end
