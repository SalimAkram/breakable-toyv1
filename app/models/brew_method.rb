class BrewMethod < ApplicationRecord
  validates :type, presence: true
  validates :filter_type, presence: true
  validates :brew_time, presence: true
  validates :kettle_type, presence: true
  validates :water_temperature, presence: true
  validates :grams, presence: true
  validates :ratio, presence: true
  validates :yield
  validates :grind, presence: true
  validates :instructions, presence: true
  validates :result_description, presence: true
 
  belongs_to :user
  belongs_to :roast
end