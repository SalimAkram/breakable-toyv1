class UserLandingSerializer < ActiveModel::Serializer
  attributes :id, :email, :username
  
  has_many :brews
end