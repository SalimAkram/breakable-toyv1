class Api::V1::RoastsController < ApplicationController
  def index
    roasts = Roast.all 
    scraper = Roast.crawler
    roasts_scraper_id = []

    scraper.each do |roast|
      roast[:id] = roasts_scraper_id.count + Roast.last.id + 1
      roasts_scraper_id << roast
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

  def crawler
    binding.pry
    url = 'https://madcapcoffee.com/madcap-coffee/coffee/'
    parsed_page = Nokogiri::HTML(open(url))
    trending_repos = parsed_page.css(".av-inner-masonry-content")
    repos = []

    trending_repos.each do |repo|
      binding.pry
      repo = {
        name: "#{repo.css("h1 a span").text.split[0]} / #{repo.css("h1 a")[0].attributes["href"].value.delete_prefix("/")}",
        description: repo.css("p").text.strip,
        primary_language: repo.css("div span span").text,
        contributors: repo.css("div span a img")[0].attributes["alt"].value.delete_prefix("@") 
      }
      repos << repo
    end

    repos.each do |repo|
      # binding.pry
      puts "#{repo[:name]} \n==========================="
      puts "#{repo[:description]}"
      puts "\nWritten primarily in #{repo[:primary_language]}\n"
      puts "\nPrimary Contributors: #{repo[:contributors]} \n---------------------------\n\n"
    end
  end

end
