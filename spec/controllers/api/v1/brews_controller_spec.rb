require "rails_helper"

RSpec.describe Api::V1::BrewsController, type: :controller do
  describe "GET#index" do
    
    let!(:brew_1) {FactoryBot.create(:brew)}

    it "return succesful status and content type of json" do
      get :index
      
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
    end

    it "shoud return that individials roasts attributes count and null false constraints" do
      get :show, params: { id: brew_1.id}
      returned_json = JSON.parse(response.body)
      
      expect(returned_json["brew"].length).to eq 16
      
      expect(returned_json["brew"]["method"]).to eq "chemex"
      expect(returned_json["brew"]["filter_type"]).to eq "natural paper"
      expect(returned_json["brew"]["brew_time"]).to eq 3
      expect(returned_json["brew"]["kettle_type"]).to eq "electric"
      expect(returned_json["brew"]["water_temperature"]).to eq 185
      expect(returned_json["brew"]["grind"]).to eq "medium"
      expect(returned_json["brew"]["instructions"]).to eq "brew that stuff with water duh"
      expect(returned_json["brew"]["user_id"]==nil?).to eq false
    end
  end
end