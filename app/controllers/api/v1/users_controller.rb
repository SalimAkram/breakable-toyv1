class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user #helper method for checking for current user vs params[:id]

  def show
    binding.pry
    user = User.find(params[:id])
    render json: user, serializer: UserSerializer
  end

  protected
  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
      # redirect_to user_session_path
    end
  end

end



