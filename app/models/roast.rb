class Roast < ApplicationRecord
  validates :name, presence: true
  validates :brand, presence: true
  validates :url, presence: true
  validates :price, numericality: true, presence: true
  validates :rating, presence: true, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 10 }

  has_many :favorites
  has_many :users, through: :favorites
end