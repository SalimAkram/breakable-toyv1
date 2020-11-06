class BrewSerializer < ActiveModel::Serializer
  attributes :id, :maker, :filter_type, :brew_time, :kettle_type, :water_temperature, :grams, :ratio, :yield, :grind, :instructions, :roast, :roast_region


  belongs_to :user
end