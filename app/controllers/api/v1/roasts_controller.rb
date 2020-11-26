class Api::V1::RoastsController < ApplicationController
  before_action :authenticate_user, except: [:index, :show]

  def index
    roasts = Roast.all 
    scraper = Scraper.crawler
    roasts_scraper = Scraper.set_id(scraper)

    render json: { roast: roasts, roasts_scraper: roasts_scraper }
  end

  def show
    roast = Roast.find(params[:id])
    render json: roast
  end

  def create
    roast = Roast.new(roast_params)
    if roast.save
    render json: roast
    else 
      render json: { error: roast.errors.full_messages }
    end
  end

  private

  def roast_params
    params.require(:roast).permit(
      :name,
      :brand,
      :region,
      :notes,
      :process,
      :producer,
      :altitude,
      :url,
      :price,
      :rating,
      :fair_trade,
      :ethical_business_practices,
      :created_at,
      :updated_at,
      :harvest_date,
    )  
  end
end
