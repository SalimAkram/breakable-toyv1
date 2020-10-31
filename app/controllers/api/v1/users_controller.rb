class Api::V1::UsersController < ApplicationController
  before_action :authenticate_user 

  def show
    # binding.pry
    user = User.find(params[:id])
    render json: user
  end

  def create
    binding.pry
  end

  protected
  def authenticate_user
    if !user_signed_in?
      render json: {error: ["You need to be signed in first"]}
    end
  end

end



