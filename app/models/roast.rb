require 'nokogiri'
require 'open-uri'
require 'httparty'
require 'pry'

class Roast < ApplicationRecord
  validates :name, presence: true
  validates :brand, presence: true
  validates :region, presence: true
  validates :notes, presence: true
  validates :process, presence: true
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
      all_roasts << roast
    end
    
    all_roasts
  end
end