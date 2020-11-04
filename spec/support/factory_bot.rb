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
end

FactoryBot.define do
  factory :roast do
    sequence(:name) { |n| "roast #{n}" }
    sequence(:brand) { |n| "brand #{n}" }
    sequence(:region) { |n| "region #{n}" }
    sequence(:notes) { |n| "notes #{n}" }
    sequence(:process) { |n| "process #{n}" }
    sequence(:producer) { |n| "producer #{n}" }
    sequence(:altitude) { |n| "altitude #{n}" }
    url { "www.test.com" }
    price { 25 }
    rating { 5 }
    harvest_date { "January 2020" }
    fair_trade { true }
    ethical_business_practices { true }
  end
end
