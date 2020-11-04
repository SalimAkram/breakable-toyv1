require "rails_helper"
require "json"

RSpec.describe Api::V1::RoastsController, type: :controller do

  describe "GET#index" do
  
    let!(:roast_1) {FactoryBot.create(:roast)}
  
    it "return successful status and content type of json" do
      get :index
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end
    
    it "should return that individual roasts attributes count and null false constraints" do
      get :show, params: { id: roast_1.id }
      returned_json = JSON.parse(response.body)
      
       expect(returned_json.length).to eq 16
       expect(returned_json["name"]).to eq roast_1.name
       expect(returned_json["brand"]).to eq roast_1.brand
       expect(returned_json["region"]).to eq roast_1.region
       expect(returned_json["notes"]).to eq roast_1.notes
       expect(returned_json["process"]).to eq roast_1.process
       expect(returned_json["price"]).to eq roast_1.price
       expect(returned_json["rating"]).to eq roast_1.rating

    end
  end
end