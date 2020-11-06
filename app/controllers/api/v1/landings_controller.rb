class Api::V1::LandingsController < ApplicationController

  def index 
    if current_user == nil
     flash.now[:notice] = "You need to be signed in to view your profile"
    else
      landing_page_data = current_user
      render json: landing_page_data, serializer: UserLandingSerializer
    end
  end
end