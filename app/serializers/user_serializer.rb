class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :username
  
  has_many :brews #figure out how to send this data up optionally
end