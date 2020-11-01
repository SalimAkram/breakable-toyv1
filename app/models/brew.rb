class Brew < ApplicationRecord
  validates :methodBr, presence: true
  validates :filter_type, presence: true
  validates :brew_time, numericality: true
  validates :kettle_type, presence: true
  validates :water_temperature, numericality: true 
  validates :grams, numericality: true
  validates :ratio, presence: true
  validates :yield, numericality: true
  validates :grind, presence: true
  validates :instructions, presence: true
  validates :result_description, presence: true
 
  belongs_to :user
end