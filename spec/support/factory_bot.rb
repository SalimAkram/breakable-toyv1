require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:username) {|n| "johndojo123#{n}" }
    sequence(:email) {|n| "user13#{n}@example.com" }  
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

FactoryBot.define do
  factory :brew do
    sequence(:maker) { "chemex" }
    filter { "natural paper" }
    time { 3 }
    kettle { "electric" }
    temperature { 185 } 
    grams { 24 }
    grind { "medium" }
    instructions { "brew that stuff with water duh" }
    ratio { "2/1" }
    roast { "light" }
    region { "kenya" }

    association :user, factory: :user
  end
end
