class Api::V1::SearchesController < ApplicationController
  def create
    if params[:location] == ""
      render json: "cant be blank"
    else
      coords = Coords.coords(params[:location])
      if coords[0] == "hmm....that search was weird try it one more time"
        error = coords[0]
      else
        lat = coords[0]
        long = coords[1]
        shops = Cafe.cafe_search(lat, long)
          if shops.count == 0
            error = "hmm....that search was weird try it one more time"
          end
      end
    end 
    render json: {shops: shops, error: error }
  end
end 