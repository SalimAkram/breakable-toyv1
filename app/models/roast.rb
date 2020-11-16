require 'nokogiri'
require 'open-uri'
require 'httparty'

class Roast < ApplicationRecord
  validates :name, presence: true
  validates :brand, presence: true
  validates :url, presence: true
  validates :price, numericality: true, presence: true
  validates :rating, presence: true, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 10 }

  has_many :favorites
  has_many :users, through: :favorites

  def self.crawler
    all_roasts = []
    mad_cap = []
    van_dyke = []
    pavement = []
    url = 'https://madcapcoffee.com/madcap-coffee/coffee/'
    parsed_page = Nokogiri::HTML(URI.open(url))
    roasts1 = parsed_page.css(".av-inner-masonry-content")
    
    roasts1.each do |roast|
      roast = { 
        name: "#{roast.css("div h3")[0].children.text}",
        brand: "mad cap",
        url: "#{roast.css('form')[0].attributes["action"].value}",
        id: nil
      }
      if roast[:name].downcase.include?('subscriptions') || roast[:url].downcase.include?('subscription')
        next
      else
        mad_cap << roast
      end
    end

    url = 'http://www.vandykecoffeeroasters.com/store/c1/Featured_Products.html'
    parsed_page2 = Nokogiri::HTML(URI.open(url))
    roasts2 = parsed_page2.css(".wsite-com-category-product")
    
    roasts2.each do |roast|
      roast = { 
        name: "#{roast.css("div a")[0].children[3].children[0].text.strip}",
        brand: "van dyke",
        url: "http://www.vandykecoffeeroasters.com#{roast.css("div a")[0].attributes["href"].value}",
        id: nil
      }
      van_dyke << roast
    end

    url = 'https://pavementcoffeehouse.com/collections/coffee'
    parsed_page2 = Nokogiri::HTML(URI.open(url))
    roasts3 = parsed_page2.css(".product")
    roasts3.each do |roast|
      roast = { 
        name: "#{roast.css("div div div div")[0].children[0].text}",
        brand: "pavement",
        url: "https://pavementcoffeehouse.com#{roast.css("div div div")[0].children[1].attributes["href"].value}",
        id: nil
      }
      if roast[:name].downcase.include?('subscriptions') || roast[:name].downcase.include?('subscription') || roast[:url].downcase.include?('subscription')
        next
      else
        pavement << roast
      end
    end
    all_roasts = mad_cap.take(6) + van_dyke.take(7) + pavement.take(7)
    all_roasts
  end
end