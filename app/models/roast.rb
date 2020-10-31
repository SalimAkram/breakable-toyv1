class Roast < ApplicationRecord
  validates :name, presence: true
  validates :brand, presence: true
  validates :region, presence: true
  validates :notes, presence: true
  validates :process, presence: true
  validates :price, numericality: true, presence: true
  validates :rating, presence: true, numericality: { greater_than_or_equal_to: 1, less_than_or_equal_to: 10 }

end