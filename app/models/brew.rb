class Brew < ApplicationRecord
  validates :maker, presence: true
  validates :filter, presence: true
  validates :time, numericality: true
  validates :kettle, presence: true
  validates :temperature, numericality: true, presence: true
  validates :grams, numericality: true
  validates :grind, presence: true
  validates :instructions, presence: true
  
  belongs_to :user
end