class Api::V1::LandingsController < ApplicationController

  def index   
    if params[:location] == "undefined"
      shops = Shop.all
    else
      coords = Coords.coords(params[:location])
      lat = coords[0]
      long = coords[1]
      shops = Cafe.cafe_search(lat, long) #<-- keep commented out until you have what you need from the search implementation
    end
    # binding.pry
    render json: shops
  end
end
