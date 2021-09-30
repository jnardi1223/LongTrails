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

Park.destroy_all
park_1 = Park.create!(park_name: "Hubbard Park",
                     state: "Connecticut",
                     town: "Meriden",
                     description: "Looking for a great trail in Hubbard Park, Connecticut? AllTrails has 8 great hiking trails, forest trails, views trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Ready for some activity? There are 7 moderate trails in Hubbard Park ranging from 3.3 to 6.7 miles and from 272 to 1,020 feet above sea level. Start checking them out and you'll be out on the trail in no time!",
                     park_type: "Town",
                     higest_elevation: 1020,
                    )
park_2 = Park.create!(park_name: "Bear Mountain Reservation",
                     state: "Connecticut",
                     town: "New Fiarfield",
                     description: "Explore the most popular trails in Bear Mountain Reservation with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers and nature lovers like you.",
                     park_type: "State",
                     higest_elevation: 2323,
                    )

Trail.destroy_all 
trail_1 = Trail.create!(trail_name: "Castle Craig",
                       summary: "Castle Craig, Loop is a 4.4 mile heavily trafficked loop trail located near Meriden, Connecticut that features a lake and is rated as moderate. The trail is primarily used for hiking, running, nature trips, and bird watching and is best used from April until October. Dogs are also able to use this trail.",
                       difficulty: "moderate",
                       length: "4.4 miles",
                       elevation_gain: 797,
                       route_type: "loop",
                       park_id: park_1.id )

trail_2 = Trail.create!(trail_name: "Bear Mountain red, white, and yellow loop",
                       summary: "Bear Mountain via Red, White, and Yellow Trails Loop is a 2.2 mile lightly trafficked loop trail located near Danbury, Connecticut that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.",
                       difficulty: "moderate",
                       length: "2.2",
                       elevation_gain: 344,
                       route_type: "loop",
                       park_id: park_2.id )

trail_3 = Trail.create!(trail_name: "Bear Mountain red and green loop",
                       summary: "Castle Craig, Loop is a 4.4 mile heavily trafficked loop trail located near Meriden, Connecticut that features a lake and is rated as moderate. The trail is primarily used for hiking, running, nature trips, and bird watching and is best used from April until October. Dogs are also able to use this trail.",
                       difficulty: "moderate",
                       length: "1.4",
                       elevation_gain: 180,
                       route_type: "loop",
                       park_id: park_2.id )


