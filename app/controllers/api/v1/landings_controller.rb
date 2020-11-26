
class Api::V1::LandingsController < ApplicationController

  def index   

    shops = Shop.all

    # if params[:lat] == "undefined" || params[:long] = "undefined" || current_user == nil
    #   lat = "42.3395328" 
    #   long ="-71.1589888"
    # else 
    #   lat = params[:lat]
    #   long = params[:long]  
    # end


#figure out a cheaper API solution

    # cafes = []

    # cafe_search=HTTParty.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{lat},#{long}&radius=4000&type=cafe&keyword=coffee_shop&coffee=&key=#{ENV["GOOGLE_KEY"]}") 
    # cafe_search["results"].each do |cafe| 
    #   cafe_push=HTTParty.get("https://maps.googleapis.com/maps/api/place/details/json?place_id=#{cafe["place_id"]}&fields=url,name,place_id,formatted_address&key=#{ENV["GOOGLE_KEY"]}") 
    #   if cafe_push["result"]["name"].downcase.include?('starbucks') || cafe_push["result"]["name"].downcase.include?('dunkin')
    #     next
    #   else
    #     cafes << cafe_push
    #   end
    # end

    #   render json: { cafes: cafes, landing: landing }
      render json: shops
  end
end
