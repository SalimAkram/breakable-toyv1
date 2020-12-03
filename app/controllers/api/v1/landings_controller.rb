class Api::V1::LandingsController < ApplicationController

  def index
    shops = Shop.all #<- seed data that renders defaults
    render json: shops
  end
end
