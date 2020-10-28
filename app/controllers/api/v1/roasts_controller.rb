class Api::V1::RoastsController < ApplicationController
  def index
    roasts = Roast.all 
    render json: roasts
  end
end