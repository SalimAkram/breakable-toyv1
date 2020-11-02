class Api::V1::BrewsController < ApplicationController

  def index
    brews = Brew.all
    render json: brews
  end

  def create
    brew = Brew.new(brew_params)
    brew.user_id = current_user.id 

    if brew.save
      render json: brew 
    else
      render json: { error: brew.errors.full_messages } 
    end
  end

  private

  def brew_params
    params.require(:brew).permit(
      :method,
      :filter_type,
      :brew_time,
      :kettle_type,
      :water_temperature,
      :grams,
      :ratio,
      :yield,
      :grind,
      :instructions,
      :roast,
      :roast_region,
    )  
  end
end