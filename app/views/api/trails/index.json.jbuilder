json.array! @trails do |trail|
    json.extract! trail, :id, :trail_name, :summary, :difficulty, :length, :elevation_gain, :route_type, :park_id
end
