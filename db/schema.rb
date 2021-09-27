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

ActiveRecord::Schema.define(version: 2021_09_26_151355) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "parks", force: :cascade do |t|
    t.string "park_name", null: false
    t.string "state", null: false
    t.string "town", null: false
    t.text "description", null: false
    t.string "park_type", null: false
    t.integer "higest_elevation", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["park_name"], name: "index_parks_on_park_name"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "post_date", null: false
    t.string "hike_date", null: false
    t.integer "rating", null: false
    t.text "review", null: false
    t.integer "user_id", null: false
    t.integer "trail_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trails", force: :cascade do |t|
    t.string "trail_name", null: false
    t.text "summary", null: false
    t.string "difficutly", null: false
    t.string "length", null: false
    t.integer "elevation_gain", null: false
    t.string "route_type", null: false
    t.integer "park_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["park_id"], name: "index_trails_on_park_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
