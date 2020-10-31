class Api::V1::RoastsController < ApplicationController
  def index
    roasts = Roast.all 
    render json: roasts
  end

  def create
  end

  def show
    roast = Roast.find(params[:id])
    render json: roast
  end
end
