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

ActiveRecord::Schema.define(version: 2020_10_31_164855) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "brew_methods", force: :cascade do |t|
    t.string "type", null: false
    t.string "filter_type", null: false
    t.integer "brew_time", null: false
    t.string "kettle_type", null: false
    t.integer "water_temperature", null: false
    t.integer "grams", null: false
    t.string "ratio", null: false
    t.integer "yield"
    t.string "grind", null: false
    t.text "instructions", null: false
    t.text "result_description", null: false
    t.bigint "users_id"
    t.bigint "roasts_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["roasts_id"], name: "index_brew_methods_on_roasts_id"
    t.index ["users_id"], name: "index_brew_methods_on_users_id"
  end

  create_table "roasts", force: :cascade do |t|
    t.string "name", null: false
    t.string "brand", null: false
    t.string "region", null: false
    t.string "notes", null: false
    t.string "process", null: false
    t.string "producer"
    t.string "altitude"
    t.string "url"
    t.integer "price", null: false
    t.integer "rating", null: false
    t.boolean "fair_trade"
    t.boolean "ethical_business_practices"
    t.bigint "users_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "harvest_date"
    t.index ["users_id"], name: "index_roasts_on_users_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "username", null: false
    t.string "profile_photo"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
