class Location < ApplicationRecord  
  # geocoded_by :address
  reverse_geocoded_by :latitude, :longitude

  after_validation :geocode #, :if => :address_changed?

  def address
    [latitude, longitude, street, city, zip, state].compact.join(", ")
  end

end
