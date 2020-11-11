
class Api::V1::LandingsController < ApplicationController

  def index 
    if params[:lat] == "undefined" || params[:long] = "undefined"
      lat = "42.3395328" 
      long ="-71.1589888"
    else 
      lat = params[:lat]
      long = params[:long]
    end

    cafes=HTTParty.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{lat},#{long}&radius=8450&type=cafe&keyword=coffee_shop=&key=#{ENV["GOOGLE_KEY"]}") 

    if current_user == nil
     flash.now[:notice] = "You need to be signed in to view your profile"
    else
      landing = current_user
      landing
    end
      render json: { cafes: cafes, landing: landing }
  end
end
