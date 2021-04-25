require 'rails_helper'

RSpec.describe "Api::V1::CommunicationNotebooks", type: :request do
  describe "GET /api/v1/communication_notebooks" do
    it "works! (now write some real specs)" do
      get api_v1_communication_notebooks_index_path
      expect(response).to have_http_status(200)
    end
  end
end
