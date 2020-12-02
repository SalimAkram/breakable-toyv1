require 'geocoder'

class Coords
  def self.coords(params)
    location = Geocoder.search(params).first
    lat = location.data["geometry"]["coordinates"][1]
    long = location.data["geometry"]["coordinates"][0]
    return coords = [lat, long]
  end
end