json.array! @trails do |trail|
    json.extract! trail, :id, :trail_name, :summary, :difficulty, :length, :elevation_gain, :route_type, :park_id, :long, :lat, :img_url, :img_url_2
end

