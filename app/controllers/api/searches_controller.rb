class Api::SearchesController < ApplicationController

    def index
        if params[:query]
            split_query = params[:query].split(" ").join("%")
            @trails = Trail.where("trail_name ILIKE ?", "%#{split_query}%")
            @parks = Park.where("park_name ILIKE ?", "%#{split_query}%")
        else
            @trails = Trail.all
            @parks = Park.all
        end

        render :search_results
    end

end