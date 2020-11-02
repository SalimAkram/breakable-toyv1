class Api::V1::LandingController < ApplicationController
  def index #possibly send other data with this but also work on validates and not being able to other users profile pages
    landing_page_data = current_user
    render json: landing_page_data
  end
end