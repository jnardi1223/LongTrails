json.array! @parks do |park|
    json.extract! park, :id, :park_name, :description, :state, :town, :park_type, :higest_elevation, :long, :lat, :img_url, :img_url_2
end