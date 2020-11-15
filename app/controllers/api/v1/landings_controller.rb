class Api::V1::LandingsController < ApplicationController

  def index   
    if params[:lat] == "undefined" || params[:long] = "undefined"
      lat = "42.3395328" 
      long ="-71.1589888"
    else 
      lat = params[:lat]
      long = params[:long]  
    end
binding.pry
#     cafes = [{"html_attributions"=>[],
#   "result"=>
#    {"name"=>"Martin's Coffee Shop",
#     "place_id"=>"ChIJd-TMiJd544kRUlWu9AwOTPY",
#     "rating"=>4.3,
#     "url"=>"https://maps.google.com/?cid=17747575680367744338"},
#   "status"=>"OK"},
#  {"html_attributions"=>[],
#   "result"=>
#    {"name"=>"Pavement Coffeehouse",
#     "place_id"=>"ChIJ3ZkcDMZ544kRRxpBByRvkhU",
#     "rating"=>4.2,
#     "url"=>"https://maps.google.com/?cid=1554427021927455303"},
#   "status"=>"OK"},
#  {"html_attributions"=>[],
#   "result"=>
#    {"name"=>"Dolce Vita Cafe",
#     "place_id"=>"ChIJIS3w4Ux444kRbCDLtr4qFMI",
#     "rating"=>4.6,
#     "url"=>"https://maps.google.com/?cid=13984849741491150956"},
#   "status"=>"OK"},
#  {"html_attributions"=>[],
#   "result"=>
#    {"name"=>"Kohi Coffee Company",
#     "place_id"=>"ChIJm1wvfc1544kR6msotpKfPc4",
#     "rating"=>4.4,
#     "url"=>"https://maps.google.com/?cid=14861209797862648810"},
#   "status"=>"OK"},
#  {"html_attributions"=>[],
#   "result"=>
#    {"name"=>"George Howell Coffee",
#     "place_id"=>"ChIJ4fuXNZCC44kRqbWRurQzz_E",
#     "rating"=>4.6,
#     "url"=>"https://maps.google.com/?cid=17424202334636979625"},
#   "status"=>"OK"},
#  {"html_attributions"=>[],
#   "result"=>
#    {"name"=>"Galit's Treats Café & Bakery",
#     "place_id"=>"ChIJG9HcbYJ444kRQK9okRu2W6Q",
#     "rating"=>4.9,
#     "url"=>"https://maps.google.com/?cid=11843259874620780352"},
#   "status"=>"OK"},
#  {"html_attributions"=>[],
#   "result"=>
#    {"name"=>"Darwin’s Ltd.",
#     "place_id"=>"ChIJe3KBkWh344kRpNCkpQ2SJBU",
#     "rating"=>4.4,
#     "url"=>"https://maps.google.com/?cid=1523503161269342372"},
#   "status"=>"OK"},
#  {"html_attributions"=>[],
#   "result"=>
#    {"name"=>"Caffè Nero",
#     "place_id"=>"ChIJRciT_kl444kROS_AbAjaobs",
#     "rating"=>4.6,
#     "url"=>"https://maps.google.com/?cid=13520327286062067513"},
#   "status"=>"OK"},
#  {"html_attributions"=>[],
#   "result"=>
#    {"name"=>"4A Coffee",
#     "place_id"=>"ChIJsdbXrMB544kRal7P5KmXhlU",
#     "rating"=>4.6,
#     "url"=>"https://maps.google.com/?cid=6162779896047165034"},
#   "status"=>"OK"},
#  {"html_attributions"=>[],
#   "result"=>
#    {"name"=>"WFM Coffee Bar",
#     "place_id"=>"ChIJy3ZEirN544kRkZUTUqD46tE",
#     "rating"=>4.3,
#     "url"=>"https://maps.google.com/?cid=15126175665932703121"},
#   "status"=>"OK"},
#  {"html_attributions"=>[],
#   "result"=>
#    {"name"=>"Caffè Nero",
#     "place_id"=>"ChIJzyrtMZh544kRjyr6efn5g78",
#     "rating"=>4.4,
#     "url"=>"https://maps.google.com/?cid=13800148533081942671"},
#   "status"=>"OK"},
#  {"html_attributions"=>[],
#   "result"=>
#    {"name"=>"Espresso Yourself",
#     "place_id"=>"ChIJ0xBPAmx544kR5AhgFF0XVqQ",
#     "rating"=>4.7,
#     "url"=>"https://maps.google.com/?cid=11841677958758533348"},
#   "status"=>"OK"},
#  {"html_attributions"=>[],
#   "result"=>
#    {"name"=>"Caffè Nero",
#     "place_id"=>"ChIJSzKGoY1544kRQU9sX30Q7V0",
#     "rating"=>4.3,
#     "url"=>"https://maps.google.com/?cid=6768083945665613633"},
#   "status"=>"OK"},
#  {"html_attributions"=>[],
#   "result"=>
#    {"name"=>"Darwin's Ltd. - Putnam Avenue",
#     "place_id"=>"ChIJZ1yesk1344kRKAl-jshwANs",
#     "rating"=>4.2,
#     "url"=>"https://maps.google.com/?cid=15780737100992612648"},
#   "status"=>"OK"},
#  {"html_attributions"=>[],
#   "result"=>
#    {"name"=>"Caffè Nero",
#     "place_id"=>"ChIJuWM3glF544kRFYrWUDT3xms",
#     "rating"=>4.3,
#     "url"=>"https://maps.google.com/?cid=7766166411513596437"},
#   "status"=>"OK"}]
    cafes = []    

  cafes = [
    {"html_attributions"=>[],
    "result"=>
    {"name"=>"Martin's Coffee Shop",
      "place_id"=>"ChIJd-TMiJd544kRUlWu9AwOTPY",
      "rating"=>4.3,
      "url"=>"https://maps.google.com/?cid=17747575680367744338"},
    "status"=>"OK"},
  {"html_attributions"=>[],
    "result"=>
    {"name"=>"Pavement Coffeehouse",
      "place_id"=>"ChIJ3ZkcDMZ544kRRxpBByRvkhU",
      "rating"=>4.2,
      "url"=>"https://maps.google.com/?cid=1554427021927455303"},
    "status"=>"OK"},
  {"html_attributions"=>[],
    "result"=>
    {"name"=>"Dolce Vita Cafe",
      "place_id"=>"ChIJIS3w4Ux444kRbCDLtr4qFMI",
      "rating"=>4.6,
      "url"=>"https://maps.google.com/?cid=13984849741491150956"},
    "status"=>"OK"},
  {"html_attributions"=>[],
    "result"=>
    {"name"=>"Kohi Coffee Company",
      "place_id"=>"ChIJm1wvfc1544kR6msotpKfPc4",
      "rating"=>4.4,
      "url"=>"https://maps.google.com/?cid=14861209797862648810"},
    "status"=>"OK"},
  {"html_attributions"=>[],
    "result"=>
    {"name"=>"George Howell Coffee",
      "place_id"=>"ChIJ4fuXNZCC44kRqbWRurQzz_E",
      "rating"=>4.6,
      "url"=>"https://maps.google.com/?cid=17424202334636979625"},
    "status"=>"OK"},
  {"html_attributions"=>[],
    "result"=>
    {"name"=>"Galit's Treats Café & Bakery",
      "place_id"=>"ChIJG9HcbYJ444kRQK9okRu2W6Q",
      "rating"=>4.9,
      "url"=>"https://maps.google.com/?cid=11843259874620780352"},
    "status"=>"OK"},
  {"html_attributions"=>[],
    "result"=>
    {"name"=>"Darwin’s Ltd.",
      "place_id"=>"ChIJe3KBkWh344kRpNCkpQ2SJBU",
      "rating"=>4.4,
      "url"=>"https://maps.google.com/?cid=1523503161269342372"},
    "status"=>"OK"},
  {"html_attributions"=>[],
    "result"=>
    {"name"=>"Caffè Nero",
      "place_id"=>"ChIJRciT_kl444kROS_AbAjaobs",
      "rating"=>4.6,
      "url"=>"https://maps.google.com/?cid=13520327286062067513"},
    "status"=>"OK"},
  {"html_attributions"=>[],
    "result"=>
    {"name"=>"4A Coffee",
      "place_id"=>"ChIJsdbXrMB544kRal7P5KmXhlU",
      "rating"=>4.6,
      "url"=>"https://maps.google.com/?cid=6162779896047165034"},
    "status"=>"OK"},
  {"html_attributions"=>[],
    "result"=>
    {"name"=>"WFM Coffee Bar",
      "place_id"=>"ChIJy3ZEirN544kRkZUTUqD46tE",
      "rating"=>4.3,
      "url"=>"https://maps.google.com/?cid=15126175665932703121"},
    "status"=>"OK"},
  {"html_attributions"=>[],
    "result"=>
    {"name"=>"Caffè Nero",
      "place_id"=>"ChIJzyrtMZh544kRjyr6efn5g78",
      "rating"=>4.4,
      "url"=>"https://maps.google.com/?cid=13800148533081942671"},
    "status"=>"OK"},
  {"html_attributions"=>[],
    "result"=>
    {"name"=>"Espresso Yourself",
      "place_id"=>"ChIJ0xBPAmx544kR5AhgFF0XVqQ",
      "rating"=>4.7,
      "url"=>"https://maps.google.com/?cid=11841677958758533348"},
    "status"=>"OK"},
  {"html_attributions"=>[],
    "result"=>
    {"name"=>"Caffè Nero",
      "place_id"=>"ChIJSzKGoY1544kRQU9sX30Q7V0",
      "rating"=>4.3,
      "url"=>"https://maps.google.com/?cid=6768083945665613633"},
    "status"=>"OK"},
  {"html_attributions"=>[],
    "result"=>
    {"name"=>"Darwin's Ltd. - Putnam Avenue",
      "place_id"=>"ChIJZ1yesk1344kRKAl-jshwANs",
      "rating"=>4.2,
      "url"=>"https://maps.google.com/?cid=15780737100992612648"},
    "status"=>"OK"},
  {"html_attributions"=>[],
    "result"=>
    {"name"=>"Caffè Nero",
      "place_id"=>"ChIJuWM3glF544kRFYrWUDT3xms",
      "rating"=>4.3,
      "url"=>"https://maps.google.com/?cid=7766166411513596437"},
    "status"=>"OK"}
]
    
    # cafe_search=HTTParty.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{lat},#{long}&radius=4000&type=cafe&keyword=coffee_shop&coffee=&key=#{ENV["GOOGLE_KEY"]}") 
   
    # cafe_search["results"].each do |cafe|
    #   cafe=HTTParty.get("https://maps.googleapis.com/maps/api/place/details/json?place_id=#{cafe["place_id"]}&fields=url,name,rating,place_id&key=#{ENV["GOOGLE_KEY"]}") 

    #   if cafe["result"]["name"].downcase.include?('starbucks') || cafe["result"]["name"].downcase.include?('dunkin')
    #     next
    #   else
    #     cafes << cafe
    #   end
    # end

    cafe_search=HTTParty.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{lat},#{long}&radius=4000&type=cafe&keyword=coffee_shop&coffee=&key=#{ENV["GOOGLE_KEY"]}") 
   
    cafe_search["results"].each do |cafe|
      
      cafe=HTTParty.get("https://maps.googleapis.com/maps/api/place/details/json?place_id=#{cafe["place_id"]}&fields=url,name,place_id&key=#{ENV["GOOGLE_KEY"]}") 
      binding.pry
      if cafe["name"].downcase.include?('starbucks') || cafe["name"].downcase.include?('dunkin')
        next
      else
        cafes << cafe
      end
    end
    if current_user == nil
     flash.now[:notice] = "You need to be signed in to view your profile"
    else
      landing = current_user
      landing
    end
      render json: { cafes: cafes, landing: landing }
  end
end
