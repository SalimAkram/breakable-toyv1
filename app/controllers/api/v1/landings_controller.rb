class Api::V1::LandingsController < ApplicationController

  def index   
    shops = Shop.all
     # cafes = Cafe.cafe_search <-- keep commented out until you have what you need from the search implementation
    render json: shops
  end
end
