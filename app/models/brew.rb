class Brew < ApplicationRecord
  validates :method, presence: true
  validates :filter_type, presence: true
  validates :brew_time, numericality: true
  validates :kettle_type, presence: true
  validates :water_temperature, numericality: true 
  validates :grams, numericality: true
  validates :grind, presence: true
  validates :instructions, presence: true
  
  belongs_to :user
end