require 'nokogiri'
require 'open-uri'

class Scraper

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

  def self.set_id(scraper)
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
    roasts_scraper_id
  end
end
