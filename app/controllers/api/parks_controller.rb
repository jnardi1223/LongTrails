class Api::ParksController < ApplicationController
    def show
        @park = Park.find_by(id: params[:id])
        @hikes = @park.hikes
                    .joins(:reviews)
                    .select("trails.*, AVG(reviews.rating) as avg_rating, COUNT(reviews.id) as num_reviews, SUM(reviews.rating) as sum_ratings")
        render :show
    end

    # def trails_in_park
    #     temp_park = Park.find(params[:id])

    #     @trails_in_park = Trail
    #                 .select('*')
    #                 .where('park_id = ?', temp_park.id)
    # end
end