
class User < ApplicationRecord
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :username, presence: true 

  mount_uploader :profile_photo, ProfilePhotoUploader 

  has_many :roasts
  has_many :brews

  devise :database_authenticatable, :registerable,
  :recoverable, :rememberable, :validatable
end

# Include default devise modules. Others available are:
# :confirmable, :lockable, :timeoutable, :trackable and :omniauthable