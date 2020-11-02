require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:first_name) {|n| "First name #{n}" }
    sequence(:last_name) {|n| "Last Name#{n}" }
    sequence(:username) {|n| "johndojo123#{n}" }
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
  end

FactoryBot.define do
  factory :roast do
    sequence(:name) { |n| "roast #{n}" }
    sequence(:region) { |n| "region #{n}" }
    sequence(:notes) { |n| "notes #{n}" }
    sequence(:process) { |n| "process #{n}" }
    sequence(:producer) { |n| "producer #{n}" }
    sequence(:altitude) { |n| "altitude #{n}" }
    sequence(:url) { |n| "url #{n}" }
    sequence(:price) { |n| "price #{n}" }
    sequence(:rating) { |n| "rating #{n}" }
    fair_trade { true }
    ethical_business_practices { true }
  end
end

end
