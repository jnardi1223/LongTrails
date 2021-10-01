json.extract! @review, :id, :rating, :review, :hike_date, :trail_id, :user_id
json.reviewer do 
    json.partial! "/api/users/user", user: @review.reviewer
end 