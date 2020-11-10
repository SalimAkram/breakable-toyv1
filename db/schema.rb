# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_09_182617) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "brews", force: :cascade do |t|
    t.string "maker", null: false
    t.string "filter", null: false
    t.integer "time", null: false
    t.string "kettle", null: false
    t.integer "temperature", null: false
    t.integer "grams", null: false
    t.string "grind", null: false
    t.text "instructions", null: false
    t.string "ratio"
    t.integer "yield"
    t.string "roast"
    t.string "region"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_brews_on_user_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "address"
    t.float "latitude"
    t.float "longitude"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roasts", force: :cascade do |t|
    t.string "name", null: false
    t.string "brand", null: false
    t.string "region"
    t.string "notes"
    t.string "process"
    t.string "producer"
    t.string "altitude"
    t.string "url", null: false
    t.integer "price", null: false
    t.integer "rating", null: false
    t.boolean "fair_trade"
    t.boolean "ethical_business_practices"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "harvest_date"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "username", null: false
    t.string "profile_photo"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
