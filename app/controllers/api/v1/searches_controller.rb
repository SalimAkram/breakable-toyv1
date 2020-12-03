class Api::V1::SearchesController < ApplicationController
  def create
    if params[:location] == "undefined"
       flash[:notice] = "you didnt submit a location"
    else
      coords = Coords.coords(params[:location])
      lat = coords[0]
      long = coords[1]
      shops = Cafe.cafe_search(lat, long) # <-- this is the API response object
    end
    render json: shops
  end
end 