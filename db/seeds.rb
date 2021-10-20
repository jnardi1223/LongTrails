# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
demo = User.create!(first_name: "Demo", last_name: "user", email: "email@demo", password: "123456")
user_1 = User.create!(first_name: "Jim", last_name: "Nardi", email: "Jim@gmail.com", password: "123456")
user_2 = User.create!(first_name: "Emma", last_name: "Hutton", email: "Emma@gmail.com", password: "123456")
user_3 = User.create!(first_name: "Justin", last_name: "Gray", email: "Justin@gmail.com", password: "123456")
user_4 = User.create!(first_name: "Brian", last_name: "Mahon", email: "Brian@gmail.com", password: "123456")

Park.destroy_all
park_1 = Park.create!(park_name: "Hubbard Park",
                     state: "Connecticut",
                     town: "Meriden",
                     description: "Looking for a great trail in Hubbard Park, Connecticut? AllTrails has 8 great hiking trails, forest trails, views trails and more, with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers, and nature lovers like you. Ready for some activity? There are 7 moderate trails in Hubbard Park ranging from 3.3 to 6.7 miles and from 272 to 1,020 feet above sea level. Start checking them out and you'll be out on the trail in no time!",
                     park_type: "Town",
                     higest_elevation: 1020,
                     lat: 41.5482,
                     long: -72.8361,
                     img_url: "https://www.aerialviewphotographs.com/uploads/9/8/1/7/98172320/avp-castle-craig-may-2020-0691-memorial-at-castle-craig_orig.jpg"
                    )

park_2 = Park.create!(park_name: "Bear Mountain Reservation",
                     state: "Connecticut",
                     town: "New Fiarfield",
                     description: "Explore the most popular trails in Bear Mountain Reservation with hand-curated trail maps and driving directions as well as detailed reviews and photos from hikers, campers and nature lovers like you.",
                     park_type: "State",
                     higest_elevation: 2323,
                     lat: 41.3129,
                     long: -74.0063,
                     img_url: "https://cdn10.phillymag.com/wp-content/uploads/sites/3/2020/09/bear-mountain-state-park-gb.jpg"
                    )
park_3 = Park.create!(park_name: "Green Mountain National Forest",
                     state: "Vermont",
                     town: "Rutland",
                     description: "The Green Mountain National Forest is managed by the United States Department of Agriculture Forest Service. Located in Rutland Vermont, the park contains portions of both the Long Trail and the Appalachian Trail as well as other popular peaks and trails. The park is a popular destination in New England for hiking, horseback riding, and mountain biking.",
                     park_type: "National",
                     higest_elevation: 4068,
                     lat: 43.0548,
                     long: -72.9996,
                     img_url: "https://peakvisor.com/img/news/Green-Mountains-National-Forest1.jpg"
                  )


Trail.destroy_all 
trail_1 = Trail.create!(trail_name: "Castle Craig",
                       summary: "Castle Craig, Loop is a 4.4 mile heavily trafficked loop trail located near Meriden, Connecticut that features a lake and is rated as moderate. The trail is primarily used for hiking, running, nature trips, and bird watching and is best used from April until October. Dogs are also able to use this trail.",
                       difficulty: "moderate",
                       length: "4.4 miles",
                       elevation_gain: 797,
                       route_type: "loop",
                       park_id: park_1.id,
                       lat: 41.5566,
                       long: -72.8355,
                       img_url: "https://www.ctvisit.com/sites/default/files/styles/square_image/public/Castle-Craig_Fall_Sq.jpg?itok=ASdIFjRq",
                       img_url_2: "https://images.squarespace-cdn.com/content/v1/5b46c539f79392287e58d958/1532127577083-KPBNSKCC2WG6RPZPTRN5/Castle+Craig+and+East+Slope+Hubbard+Park+Meriden+CT"
                       ); 

trail_2 = Trail.create!(trail_name: "Bear Mountain red, white, and yellow loop",
                       summary: "Bear Mountain via Red, White, and Yellow Trails Loop is a 2.2 mile lightly trafficked loop trail located near Danbury, Connecticut that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is accessible year-round. Dogs are also able to use this trail but must be kept on leash.",
                       difficulty: "moderate",
                       length: "2.2",
                       elevation_gain: 344,
                       route_type: "loop",
                       park_id: park_2.id,
                       lat: 42.0448,
                       long: -73.4548,
                       img_url: "https://media-cdn.tripadvisor.com/media/photo-s/1c/0b/74/40/signs.jpg",
                       img_url_2: "https://www.nynjtc.org/sites/default/files/styles/hike_park_destination_page/public/park/1_HarrimanBearMtn1_Balogh2009.jpg?itok=6dZCjUHR"
                    )

trail_3 = Trail.create!(trail_name: "Bear Mountain red and green loop",
                       summary: "Castle Craig, Loop is a 4.4 mile heavily trafficked loop trail located near Meriden, Connecticut that features a lake and is rated as moderate. The trail is primarily used for hiking, running, nature trips, and bird watching and is best used from April until October. Dogs are also able to use this trail.",
                       difficulty: "moderate",
                       length: "1.4",
                       elevation_gain: 180,
                       route_type: "loop",
                       park_id: park_2.id,
                       lat: 42.0448,
                       long: -73.4548,
                       img_url: "https://visitbearmountain.com/wp-content/uploads/sites/41/2017/07/iona-2-800x570.jpg",
                       img_url_2: "https://www.rei.com/blog/wp-content/uploads/sites/4/2015/08/Appalachian-Trail-0021.jpg?fit=1500%2C1000"
                    )

trail_4 = Trail.create!(trail_name: "Lye Brook Falls Trail",
                       summary: "Lye Brook Falls Trail is a 4.4 mile heavily trafficked out and back trail located near Manchester Center, Vermont that features a waterfall and is rated as moderate. The trail offers a number of activity options and is best used from April until October. Dogs are also able to use this trail but must be kept on leash.",
                       difficulty: "moderate",
                       length: "4.4",
                       elevation_gain: 918,
                       route_type: "Out & back",
                       park_id: park_3.id,
                       lat: 43.1590,
                       long: -71.0411,
                       img_url: "https://www.fs.usda.gov/Internet/FSE_MEDIA/stelprdb5322238.jpg",
                       img_url_2: "https://vermontexplored.com/wp-content/uploads/2021/03/Lye-Brook-Falls-Sign.jpg.webp"
                    )


trail_5 = Trail.create!(trail_name: "Killington Peak",
                       summary: "Killington Peak via Bucklin Trail is a 7.2 mile heavily trafficked out and back trail located near Mendon, Vermont that features a river and is rated as difficult. The trail offers a number of activity options and is best used from March until October. Dogs are also able to use this trail but must be kept on leash.",
                       difficulty: "hard",
                       length: "7.2",
                       elevation_gain: 2470,
                       route_type: "Out & back",
                       park_id: park_3.id,
                       lat: 43.6045,
                       long: -72.8201,
                       img_url: "https://vermontexplored.com/wp-content/uploads/2021/01/Killington-hiking.jpg",
                       img_url_2: "https://upload.wikimedia.org/wikipedia/commons/3/39/Killington_Pk_seen_from_Pico_Pk.jpg"

                    )

trail_6 = Trail.create!(trail_name: "Haystack Mountain Trail",
                       summary: "Haystack Mountain Trail is a 5 mile heavily trafficked out and back trail located near Wilmington, Vermont that features beautiful wild flowers and is rated as moderate. The trail offers a number of activity options and is best used from March until November. Dogs are also able to use this trail but must be kept on leash.",
                       difficulty: "moderate",
                       length: "5.0",
                       elevation_gain: 1010,
                       route_type: "Out & back",
                       park_id: park_3.id,
                       lat: 42.8996,
                       long: -72.9109,
                       img_url: "https://www.saranaclake.com/f/styles/listing_slideshow/public/listing/15229/images/rs93082-dsc3047.jpg?itok=No79ROi9",
                       img_url_2: "https://rocherealty.com/wp-content/uploads/elementor/thumbs/2020-2-10-hiking_in_nh-p2oc4s5y1e7tyasae69x53ea5i9vyxifiivwcxmdso.jpg"

                    )
                       

trail_7 = Trail.create!(trail_name: "Equinox Mountain and Lookout Rock",
                       summary: "Equinox Mountain and Lookout Rock is a 6.3 mile heavily trafficked out and back trail located near Arlington, Vermont that features beautiful wild flowers and is rated as difficult. The trail is primarily used for hiking and is best used from May until October. Dogs are also able to use this trail.",
                       difficulty: "hard",
                       length: "6.3",
                       elevation_gain: 2883,
                       route_type: "Out & back",
                       park_id: park_3.id,
                       lat: 43.1632,
                       long: -73.0787,
                       img_url: "https://s3-us-west-1.amazonaws.com/peakery-media/images/items/users/cache/lookout-rock-vermont-2012-01-16-1.JPG.480x360_q95.jpg",
                       img_url_2: "https://2.bp.blogspot.com/-kXYaIG_bmhk/WiMOnMaduxI/AAAAAAAAAJM/DOTNKi9ve4Aa7b0qmG7UbmOeZG2sBp0QwCLcBGAs/s1600/IMGP8078.JPG"
                    )

trail_8 = Trail.create!(trail_name: "Mount Abraham",
                       summary: "Mount Abraham via Long Trail is a 5.1 mile heavily trafficked out and back trail located near Bristol, Vermont that offers the chance to see wildlife and is rated as difficult. The trail is primarily used for hiking, running, and nature trips and is best used from May until October. Dogs are also able to use this trail but must be kept on leash.",
                       difficulty: "hard",
                       length: "5.1",
                       elevation_gain: 1765,
                       route_type: "Out & back",
                       park_id: park_3.id,
                       lat: 44.0942,
                       long: -73.9264,
                       img_url: "https://lh3.googleusercontent.com/proxy/AKfTzDe3Yg6iI1D4Hw0bpBYlg9DfYjss8b9Of_D9XqKv2haGZmIJKSGQ8InYIOpZZz985WrrLkcKSWzFLOLrvHbQWQ",
                       img_url_2: "https://www.vermontvacation.com/~/media/images/rotator%20images/summer/hiking-in-stowe-view-from-summit.ashx"
                    )

review_1 = Review.create(rating: 5, review: "This hike was amazing! The view fromt he top of castle craig is incredible", hike_date: "2021-08-15", post_date: "2021-8-16", user_id: user_1.id, trail_id: trail_1.id)
review_2 = Review.create(rating: 3, review: "The hike was nice but there was so many peopel at every point", hike_date: "2020-04-11", user_id: user_2.id, post_date: "2021-04-16", trail_id: trail_2.id)
review_3 = Review.create(rating: 4, review: "Great hike but a little too step for my dog at times.", hike_date: "2020-08-29", user_id: user_3.id, post_date: "2021-08-30", trail_id: trail_3.id)


