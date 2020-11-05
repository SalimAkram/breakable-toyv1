class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :username
  
  has_many :brews #figure out how to send this data up optionally
end