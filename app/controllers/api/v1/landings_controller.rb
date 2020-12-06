class Api::V1::LandingsController < ApplicationController

  def index
    shops = Shop.all
    render json: shops
  end
end
