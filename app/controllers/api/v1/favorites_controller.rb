class Api::V1::FavoritesController < ApplicationController
  # before_action :authenticate_user

  def create
  favorite = Favorite.new()
  favorite.user_id = current_user.id
  favorite.roast_id = params["_json"]

   if favorite.save
      flash.now[:notice] = "added to favorites"
    else
      render json: { error: favorite.errors.full_messages } 
    end
  end
end 