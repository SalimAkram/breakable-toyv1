# require 'nokogiri'
# require 'httparty'
# require 'open-uri'
# require 'pry'

# def crawler
#   url = 'https://madcapcoffee.com/madcap-coffee/coffee/'
#   parsed_page = Nokogiri::HTML(open(url))
#   trending_repos = parsed_page.css(".av-inner-masonry-content")
#   repos = []
  
#   trending_repos.each do |repo|
#     binding.pry
#     repo = {
#       name: "#{repo.css("h1 a span").text.split[0]} / #{repo.css("h1 a")[0].attributes["href"].value.delete_prefix("/")}",
#       description: repo.css("p").text.strip,
#       primary_language: repo.css("div span span").text,
#       contributors: repo.css("div span a img")[0].attributes["alt"].value.delete_prefix("@") 
#     }
#     repos << repo
#   end

#   repos.each do |repo|
#     # binding.pry
#     puts "#{repo[:name]} \n==========================="
#     puts "#{repo[:description]}"
#     puts "\nWritten primarily in #{repo[:primary_language]}\n"
#     puts "\nPrimary Contributors: #{repo[:contributors]} \n---------------------------\n\n"
#   end
# end

# crawler