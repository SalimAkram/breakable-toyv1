class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username, :profile_photo
  
  has_many :brews
  has_many :favorites
end