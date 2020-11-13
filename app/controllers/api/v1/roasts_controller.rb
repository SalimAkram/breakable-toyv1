class Api::V1::RoastsController < ApplicationController

  def index
    roasts = Roast.all 
    scraper = Roast.crawler
    
    roasts_scraper_id = []
    id = 0
    
    scraper.each do |roast|
      if Roast.last.nil?
        roast[:id] = roasts_scraper_id.count + id + 1
        roasts_scraper_id << roast
      else
        roast[:id] = roasts_scraper_id.count + Roast.last.id + 1
        roasts_scraper_id << roast
      end
    end
    render json: { roast: roasts, roasts_scraper: roasts_scraper_id }
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
