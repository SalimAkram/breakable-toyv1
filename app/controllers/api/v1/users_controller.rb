class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user
  before_action :authorize_user

  def show
    # binding.pry
    user = User.find(params[:id])
    render json: user, serializer: UserSerializer
  end

  def add_favorite
    binding.pry
  end
end



