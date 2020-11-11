require 'nokogiri'
require 'open-uri'
require 'httparty'

class Roast < ApplicationRecord
  validates :name, presence: true
  validates :brand, presence: true
  validates :url, presence: true
  validates :price, numericality: true, presence: true
  validates :rating, presence: true, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 10 }

  def self.crawler
    all_roasts = []
    url = 'https://madcapcoffee.com/madcap-coffee/coffee/'
    parsed_page = Nokogiri::HTML(URI.open(url))
    roasts1 = parsed_page.css(".av-inner-masonry-content")
    
    roasts1.each do |roast|
      roast = { 
        name: "#{roast.css("div h3")[0].children.text}",
        url: "#{roast.css('form')[0].attributes["action"].value}",
        id: nil
      }
      if roast[:name].downcase.include?('subscriptions') || roast[:url].downcase.include?('subscription')
        next
      else
        all_roasts << roast
      end
    end

    url = 'http://www.vandykecoffeeroasters.com/store/c1/Featured_Products.html'
    parsed_page2 = Nokogiri::HTML(URI.open(url))
    roasts2 = parsed_page2.css(".wsite-com-category-product")
    
    roasts2.each do |roast|
      roast = { 
        name: "#{roast.css("div a")[0].children[3].children[0].text.strip}",
        url: "http://www.vandykecoffeeroasters.com#{roast.css("div a")[0].attributes["href"].value}",
        id: nil
      }
      all_roasts << roast
    end
    
    all_roasts
  end
end