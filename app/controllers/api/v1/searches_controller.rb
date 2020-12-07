class Api::V1::SearchesController < ApplicationController
  def create
    if params[:location] == ""
      render json: "cant be blank"
    else
      coords = Coords.coords(params[:location])
      lat = coords[0]
      long = coords[1]
      shops = Cafe.cafe_search(lat, long)
    end 
    render json: shops
  end
end 