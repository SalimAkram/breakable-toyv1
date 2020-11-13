class Api::V1::BrewsController < ApplicationController

  def index
    brews = Brew.all
    render json: brews
  end

  def show
    brew = Brew.find(params[:id])
    user = brew.user
    render json: { brew: brew, user: user }
  end

  def create
    binding.pry
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
      :maker,
      :filter,
      :time,
      :kettle,
      :temperature,
      :grams,
      :ratio,
      :yield,
      :grind,
      :instructions,
      :roast,
      :region,
    )  
  end
end