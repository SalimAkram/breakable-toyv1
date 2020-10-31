class Api::V1::RoastsController < ApplicationController
  def index
    binding.pry
    roasts = Roast.all 
    render json: roasts
  end

  def show
    roast = Roast.find(params[:id])
    render json: roast
  end
end