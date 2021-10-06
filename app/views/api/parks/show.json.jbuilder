json.extract! @park, :id, :park_name, :state, :town, :description, :park_type, :higest_elevation, :long, :lat


# json.array! @trails do |trail|
#     json.extract! trail, :id, :trail_name, :summary, :difficulty, :length, :elevation_gain, :route_type, :park_id, :long, :lat
# end