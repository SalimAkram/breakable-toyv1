# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

roast1 = Roast.create(
  name: "Samuel Degelo",
  brand: "Mad Cap Coffee Company",
  region: "Ethiopia",
  notes: "Peach, Complex, Ginger Candy, Pineapple",
  process: "Washed",
  producer: "Bishan Dimo Washing Station",
  altitude: "1850-2050",
  url: "https://madcapcoffee.com/shop/coffee/samueldegelo/",
  price: 20.50,
  rating: 8,
  harvest_date: nil,
  fair_trade: false,
  ethical_business_practices: true
)
roast2 = Roast.create(
  name: "The Answer",
  brand: "Menotti's",
  region: "Ethiopia/Columbia",
  notes: "Caramel, Berries, Chocolate",
  process: "Natural, Washed",
  producer: "Various",
  altitude: "1,100-1,900",
  url: "https://menottis.com/collections/all-beans/products/answer?variant=32578006417471",
  price: 20.00,
  rating: 8,
  harvest_date: nil,
  fair_trade: true,
  ethical_business_practices: true
)
roast3 = Roast.create(
  name: "Ethiopia Ardi",
  brand: "Van Dyke Coffee Roasters",
  region: "Ethiopia",
  notes: "Blueberry , Fruity, Sweet, Milk Chocolate, Citrus",
  process: "Natural",
  producer: nil,
  altitude: "1950",
  url: "http://www.vandykecoffeeroasters.com/store/p41/Ethiopia_Ardi.html",
  price: 16.00,
  rating: 10,
  harvest_date: nil,
  fair_trade: true,
  ethical_business_practices: true
)

roast4 = Roast.create(
  name: "Gahahe Natural",
  brand: "Pavement Coffeehouse",
  region: "Kayanza, Burundi",
  notes: "Crazy berry jam notes",
  process: "Natural Sundried",
  producer: "Greenco",
  altitude: "1800",
  url: "https://madcapcoffee.com/shop/coffee/samueldegelo/",
  price: 18.25,
  rating: 7,
  harvest_date: nil,
  fair_trade: true,
  ethical_business_practices: true,
)
roast5 = Roast.create(
  name: "Guatemala Chochujau",
  brand: "2ten Coffee Roasters",
  region: "Guatemalan",
  notes: "Cherry, Chocolate, Caramel",
  process: "washed",
  producer: nil,
  altitude: nil,
  url: "http://www.2tencoffeeroasters.com/single-origin/guatemala",
  price: 15.00,
  rating: 7,
  harvest_date: nil,
  fair_trade: true,
  ethical_business_practices: true,
)

creator = User.create(
  email: "salimakram123@gmail.com",
  password: "asdfgh",
  username: "I Love Me Some Coffee",
  profile_photo: File.open(Rails.root.join('public', 'uploads', 'seed', '000113300011.jpg'))
)

 brew1 = Brew.create(
    maker: "chemex",
    filter: "metal",
    time: 4,
    kettle: "electric",
    temperature: 202,
    grams: 24,
    ratio: "",
    rating: 9,
    grind: "coarse",
    instructions: "4 pours total.  The first pour should be anywhere from 30-60 grams of water but I usually do 50 grams and wait 30 seconds
    for the bloom.  Then 3 even pours of 100 grams of water for a total of 350 grams of water",
    roast: "light",
    region: "columbia giesha",
    user_id: 1
 )

 brew2 = Brew.create(
    maker: "chemex",
    filter: "natural paper",
    time: 4,
    kettle: "electric",
    temperature: 202,
    grams: 32,
    ratio: "",
    rating: 9,
    grind: "coarse",
    instructions: "4 pours total.  The first pour should be anywhere from 30-60 grams of water but I usually do 50 grams and wait 30 seconds
    for the bloom.  Then 3 even pours of about 140 grams of water for a total of 475 grams",
    roast: "light",
    region: "columbia giesha",
    user_id: 1
 )

