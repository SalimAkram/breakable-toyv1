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
    brew = Brew.new(brew_params)
    brew.user_id = current_user.id 
    if brew.save
      render json: brew 
    else
      render json: { error: brew.errors.full_messages } 
    end
  end

  def update
    brew = Brew.find(params[:id])
    brew.update_attributes(brew_params)
    if brew.save
      binding.pry
      # need this to return the brew object or re-render the page to trigger the useEffect on the front end
    else
      render json: { error: brew.errors.full_messages } 
    end
  end

  def edit_brew
    brew = Brew.find(params[:brew_id])
    if brew.user_id == current_user.id
      render json: { brew: brew, loaded: true }
    else
      render json: { error: "hmmm...something is wierd" }
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
      :rating,
      :grind,
      :instructions,
      :roast,
      :region,
    )  
  end
end