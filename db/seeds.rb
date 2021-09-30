# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
User.create!(first_name: "Demo", last_name: "user", email: "email@demo", password: "123456")
User.create!(first_name: "Jim", last_name: "Nardi", email: "Jim@gmail.com", password: "123456")
User.create!(first_name: "Emma", last_name: "Hutton", email: "Emma@gmail.com", password: "123456")
User.create!(first_name: "Justin", last_name: "Gray", email: "Justin@gmail.com", password: "123456")
User.create!(first_name: "Brian", last_name: "Mahon", email: "Brian@gmail.com", password: "123456")


