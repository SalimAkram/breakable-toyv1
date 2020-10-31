class Api::V1::BrewsController < ApplicationController

  def create
    binding.pry
    brew = Brew.new(brew_params)
 
  end

  private

  def brew_params
    params.require(:brew).permit(
      :type,
      :filter_type,
      :brew_time,
      :kettle_type,
      :water_temperature,
      :grams,
      :ratio,
      :yield,
      :grind,
      :instructions,
      :result_description,
    )  
  end
end