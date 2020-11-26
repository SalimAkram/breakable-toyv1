class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user
  before_action :authorize_user

  def show
    user = User.find(params[:id])
    
    user_favorites = user.favorites
    favorites = []

    user_favorites.each do |favorite|
      roast = Roast.find(favorite.id)
      favorites << roast
    end

    brews = user.brews
  
    render json: { favorites: favorites, user: user, brews: brews }
  end
end



