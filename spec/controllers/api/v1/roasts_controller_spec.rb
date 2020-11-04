require "rails_helper"

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

  describe "POST#create" do
    it "adds a new roast" do
      post_json = {
        roast: {
          name: "roast", 
          brand: "brand",
          region: "region", 
          notes: "notes",
          process: "process", 
          producer: "producer", 
          altitude: "altitude", 
          url: "www.test.com", 
          price: 25, 
          rating: 5, 
          harvest_date: "January 2020", 
          fair_trade: true, 
          ethical_business_practices: true, 
        }
      }
      prev_count = Roast.count
      post(:create, params: post_json, format: :json)
      expect(Roast.count).to eq(prev_count + 1)
    end

    it "return the json of the newly posted roast" do
       post_json = {
        roast: {
          name: "heleana", 
          brand: "map cap",
          region: "ethiopia", 
          notes: "berry for days",
          process: "washed", 
          producer: "some guy", 
          altitude: "1900", 
          url: "www.test.com", 
          price: 25, 
          rating: 5, 
          harvest_date: "January 2020", 
          fair_trade: true, 
          ethical_business_practices: true, 
        }
      }

      post(:create, params: post_json, format: :json)
      returned_json = JSON.parse(response.body)
      
      expect(response.status).to eq 200
      expect(response.content_type).to eq "application/json"
      
      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(returned_json["name"]).to eq "heleana"
      expect(returned_json["brand"]).to eq "map cap"
      expect(returned_json["region"]).to eq "ethiopia"
      expect(returned_json["notes"]).to eq "berry for days"
      expect(returned_json["process"]).to eq "washed"
      expect(returned_json["price"]).to eq 25
      expect(returned_json["rating"]).to eq 5
    end
  end

end