
class Api::V1::LandingsController < ApplicationController

  def index   

    if params[:lat] == "undefined" || params[:long] = "undefined" || current_user == nil
      lat = "42.3395328" 
      long ="-71.1589888"
    else 
      lat = params[:lat]
      long = params[:long]  
    end

  cafes = [
    {"html_attributions"=>[],
    "result"=>
    {"formatted_address"=>
      "35 Harvard St, Brookline, MA 02445, USA",
      "name"=>"Martin's Coffee Shop",
      "place_id"=>"ChIJd-TMiJd544kRUlWu9AwOTPY",
      "url"=>
      "https://maps.google.com/?cid=17747575680367744338"},
    "status"=>"OK"},
    {"html_attributions"=>[],
      "result"=>
      {"formatted_address"=>
        "1243 Commonwealth Avenue, Allston, MA 02134, USA",
        "name"=>"Pavement Coffeehouse",
        "place_id"=>"ChIJ3ZkcDMZ544kRRxpBByRvkhU",
        "url"=>"https://maps.google.com/?cid=1554427021927455303"},
      "status"=>"OK"},
    {"html_attributions"=>[],
      "result"=>
      {"formatted_address"=>
        "311 Walnut St, Newtonville, MA 02460, USA",
        "name"=>"George Howell Coffee",
        "place_id"=>"ChIJ4fuXNZCC44kRqbWRurQzz_E",
        "url"=>
        "https://maps.google.com/?cid=17424202334636979625"},
      "status"=>"OK"},
    {"html_attributions"=>[],
      "result"=>
      {"formatted_address"=>
        "1698 Commonwealth Avenue, Boston, MA 02135, USA",
        "name"=>"Dolce Vita Cafe",
        "place_id"=>"ChIJIS3w4Ux444kRbCDLtr4qFMI",
        "url"=>
        "https://maps.google.com/?cid=13984849741491150956"},
      "status"=>"OK"},
    {"html_attributions"=>[],
      "result"=>
      {"formatted_address"=>
        "148 Mt Auburn St, Cambridge, MA 02138, USA",
        "name"=>"Darwin’s Ltd.",
        "place_id"=>"ChIJe3KBkWh344kRpNCkpQ2SJBU",
        "url"=>"https://maps.google.com/?cid=1523503161269342372"},
      "status"=>"OK"},
    {"html_attributions"=>[],
      "result"=>
      {"formatted_address"=>
        "749 Beacon St, Newton Centre, MA 02459, USA",
        "name"=>"Galit's Treats Café & Bakery",
        "place_id"=>"ChIJG9HcbYJ444kRQK9okRu2W6Q",
        "url"=>
        "https://maps.google.com/?cid=11843259874620780352"},
      "status"=>"OK"},
    {"html_attributions"=>[],
      "result"=>
      {"formatted_address"=>"130 Guest St, Boston, MA 02135, USA",
        "name"=>"Kohi Coffee Company",
        "place_id"=>"ChIJm1wvfc1544kR6msotpKfPc4",
        "url"=>
        "https://maps.google.com/?cid=14861209797862648810"},
      "status"=>"OK"},
    {"html_attributions"=>[],
      "result"=>
      {"formatted_address"=>
        "767 Centre St, Jamaica Plain, MA 02130, USA",
        "name"=>"Espresso Yourself",
        "place_id"=>"ChIJ0xBPAmx544kR5AhgFF0XVqQ",
        "url"=>
        "https://maps.google.com/?cid=11841677958758533348"},
      "status"=>"OK"},
    {"html_attributions"=>[],
      "result"=>
      {"formatted_address"=>
        "419 Harvard St, Brookline, MA 02446, USA",
        "name"=>"4A Coffee",
        "place_id"=>"ChIJsdbXrMB544kRal7P5KmXhlU",
        "url"=>"https://maps.google.com/?cid=6162779896047165034"},
      "status"=>"OK"},
    {"html_attributions"=>[],
      "result"=>
      {"formatted_address"=>
        "1 Harvard St, Brookline, MA 02445, USA",
        "name"=>"Caffè Nero",
        "place_id"=>"ChIJzyrtMZh544kRjyr6efn5g78",
        "url"=>
        "https://maps.google.com/?cid=13800148533081942671"},
      "status"=>"OK"},
    {"html_attributions"=>[],
      "result"=>
      {"formatted_address"=>
        "31 Putnam Ave, Cambridge, MA 02139, USA",
        "name"=>"Darwin's Ltd. - Putnam Avenue",
        "place_id"=>"ChIJZ1yesk1344kRKAl-jshwANs",
        "url"=>
        "https://maps.google.com/?cid=15780737100992612648"},
      "status"=>"OK"},
    {"html_attributions"=>[],
      "result"=>
      {"formatted_address"=>
        "298 Washington St, Brighton, MA 02135, USA",
        "name"=>"Caffè Nero",
        "place_id"=>"ChIJRciT_kl444kROS_AbAjaobs",
        "url"=>
        "https://maps.google.com/?cid=13520327286062067513"},
      "status"=>"OK"},
    {"html_attributions"=>[],
      "result"=>
      {"formatted_address"=>
        "810 Mt Auburn St, Watertown, MA 02472, USA",
        "name"=>"Intelligentsia Coffee Watertown Coffeebar",
        "place_id"=>"ChIJAzkHdoR344kRND5bDDw2Gi4",
        "url"=>"https://maps.google.com/?cid=3322027306672406068"},
      "status"=>"OK"},
    {"html_attributions"=>[],
      "result"=>
      {"formatted_address"=>
        "15 Washington St, Brighton, MA 02135, USA",
        "name"=>"WFM Coffee Bar",
        "place_id"=>"ChIJy3ZEirN544kRkZUTUqD46tE",
        "url"=>
        "https://maps.google.com/?cid=15126175665932703121"},
      "status"=>"OK"},
    {"html_attributions"=>[],
      "result"=>
      {"formatted_address"=>
        "1047 Commonwealth Avenue #1001, Boston, MA 02215, USA",
        "name"=>"Caffè Nero",
        "place_id"=>"ChIJHYbe7MJ544kRHqMg5tLmeJs",
        "url"=>
        "https://maps.google.com/?cid=11202957866562528030"},
      "status"=>"OK"}
]

#figure out a cheaper API solution

    # cafes = []

    # cafe_search=HTTParty.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=#{lat},#{long}&radius=4000&type=cafe&keyword=coffee_shop&coffee=&key=#{ENV["GOOGLE_KEY"]}") 
    # cafe_search["results"].each do |cafe| 
    #   cafe_push=HTTParty.get("https://maps.googleapis.com/maps/api/place/details/json?place_id=#{cafe["place_id"]}&fields=url,name,place_id,formatted_address&key=#{ENV["GOOGLE_KEY"]}") 
    #   if cafe_push["result"]["name"].downcase.include?('starbucks') || cafe_push["result"]["name"].downcase.include?('dunkin')
    #     next
    #   else
    #     cafes << cafe_push
    #   end
    # end

    #   render json: { cafes: cafes, landing: landing }
      render json: cafes
  end
end
