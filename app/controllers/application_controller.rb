class ApplicationController < ActionController::Base
  
  protect_from_forgery unless: -> { request.format.json? }
  
  before_action :configure_permitted_parameters, if: :devise_controller?
  
  protected
  
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email, :profile_photo])
  end
  
  def authenticate_user
    if !user_signed_in?
      flash[:notice] = "You need to be signed in first"
      redirect_to new_user_session_path
    end
  end
  
  def authorize_user
    if current_user.id != params[:id].to_i
      flash[:notice] = "You do not have access to this page."
      redirect_to root_path
    end
  end
end

# Prevent CSRF attacks by raising an exception.
# For APIs, you may want to use :null_session instead.

# protect_from_forgery with: :exception