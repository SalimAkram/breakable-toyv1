class BrewSerializer < ActiveModel::Serializer
  attributes :id, :maker, :filter, :time, :kettle, :temperature, :grams, :ratio, :yield, :grind, :instructions, :roast, :region


  belongs_to :user
end