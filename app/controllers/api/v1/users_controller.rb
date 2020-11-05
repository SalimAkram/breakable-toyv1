class Api::V1::UsersController < ApplicationController
  before_action :authorize_user

  def show
    user = User.find(params[:id])
    render json: user, serializer: UserSerializer
  end

  protected

  def authorize_user
    if current_user.id != params[:id].to_i
      render json: {error: ["You can only view your profile"]}
    end
  end
end



