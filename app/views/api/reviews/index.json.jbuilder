json.array! @reviews do |review| 
    json.extract! review, :id, :rating, :review, :hike_date, :post_date, :trail_id, :user_id, :reviewer
end