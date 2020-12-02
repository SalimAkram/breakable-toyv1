# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Roast.create(
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

Roast.create(
  name: "The Answer",
  brand: "Menotti's",
  region: "Ethiopia/Columbia",
  notes: "Caramel, Berries, Chocolate",
  process: "Natural, Washed",
  producer: "Various",
  altitude: "1,100-1,900",
  url: "https://menottis.com/collections/all-beans/products/answer?v2578006417471",
  price: 20.00,
  rating: 8,
  harvest_date: nil,
  fair_trade: true,
  ethical_business_practices: true
)

Roast.create(
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

Roast.create(
  name: "Gahahe Natural",
  brand: "Pavement Coffeehouse",
  region: "Kayanza, Burundi",
  notes: "Crazy berry jam notes",
  process: "Natural Sundried",
  producer: "Greenco",
  altitude: "1800",
  url: "https://pavementcoffeehouse.com/collections/coffee/products/gahahe-natural-kayanza-burundi",
  price: 18.99,
  rating: 7,
  harvest_date: nil,
  fair_trade: true,
  ethical_business_practices: true,
)

Roast.create(
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

User.create(
  email: "salimakram123@gmail.com",
  password: "asdfgh",
  username: "I Love Me Some Coffee",
  profile_photo: File.open(Rails.root.join('public', 'uploads', 'seed', '000113300011.jpg'))
)

Brew.create(
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

Brew.create(
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

Shop.create(
  name: "Martin's Coffee Shop",
  address:  "35 Harvard St, Brookline, MA 02445, USA",
  url: "https://maps.google.com/?cid=17747575680367744338",
  place_id: 1
  
)

Shop.create(
  name: "Pavement Coffeehouse",
  address: "1243 Commonwealth Avenue, Allston, MA 02134, USA",
  url: "https://maps.google.com/?cid=1554427021927455303",
  place_id: 2
)

Shop.create(
  name: "George Howell Coffee",
  address: "311 Walnut St, Newtonville, MA 02460, USA",
  url: "https://maps.google.com/?cid=17424202334636979625",
  place_id: 3
)

Shop.create(
  name: "Dolce Vita Cafe",
  address: "1698 Commonwealth Avenue, Boston, MA 02135, USA",
  url: "https://maps.google.com/?cid=13984849741491150956",
  place_id: 4
)

Shop.create(
  name: "Kohi Coffee Company",
  address: "130 Guest St, Boston, MA 02135, USA",
  url: "https://maps.google.com/?cid=14861209797862648810",
  place_id: 5
)

Shop.create(
  name: "Espresso Yourself",
  address: "767 Centre St, Jamaica Plain, MA 02130, USA",
  url: "https://maps.google.com/?cid=11841677958758533348",
  place_id: 6
)

Shop.create(
  name: "4A Coffee",
  address: "419 Harvard St, Brookline, MA 02446, USA",
  url: "https://maps.google.com/?cid=6162779896047165034",
  place_id: 7
)

Shop.create(
  name: "Intelligentsia Coffee Watertown Coffeebar",
  address: "810 Mt Auburn St, Watertown, MA 02472, USA",
  url: "https://maps.google.com/?cid=3322027306672406068",
  place_id: 8
)