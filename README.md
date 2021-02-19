# README

[![Codeship Status for SalimAkram/cup-of-joe](https://app.codeship.com/projects/4665a194-57e9-4f5f-a26c-4a0a01b21a61/status?branch=master)](https://app.codeship.com/projects/415497)

Cup of Joe Pro enables users to maintain all of the variables of their own coffee making methods as well as view other users' methods. It was built with Ruby on Rails, Javascript React and PostgresSQL.  The user finding the closest coffee shops was implemented using the google places API and Javascript React for the search bar functionality. The “creator suggestions” on the roasts index page is populated by a custom built web scraper using the Nokogiri and Open URI ruby gems. All of the heavy lifting for user sign-up/in was handled by the Devise, Carrierwave and Fog Ruby gems, while AWS SW3 buckets housing the cloud storage for profile photos! All of the forms are built using Javascript React. The website styling, design/layout was customized using Foundation and CSS.

[Check out Cup of Joe Pro!](https://cup-of-joe-pro.herokuapp.com/)

## Developed By
- Salim Akram
## Built with
- [Ruby on Rails](https://guides.rubyonrails.org/v5.2/) 
- [React.js](https://reactjs.org/docs/getting-started.html)
- [PostgreSQL](https://www.postgresql.org/docs/13/index.html)
## Run Locally (versions)
- Ruby 2.6.5
- Rails 5.2.3
- PostgreSQL 13
###### Clone the Repo
```
git clone 
```
###### Install Dependencies
```
yarn install 
```
```
bundle install 
```
###### Create and seed the database
```
bundle exec rake db: migrate
```
```
bundle exec rake db: seed
```
###### Run the test suite
```
bundle exec rspec
```
###### Start the Rails server and webpack-dev-server
```
bundle exec rails s
yarn run start
```
###### The application can be accessed locally at <http://localhost:3000>