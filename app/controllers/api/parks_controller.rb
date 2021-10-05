class Api::ParksController < ApplicationController
    def show
        @park = Park.find_by(id: params[:id])
        # @trails = @park.trails
        #             .joins(:reviews)
        #             .select("trails.*, AVG(reviews.rating) as avg_rating, COUNT(reviews.id) as num_reviews, SUM(reviews.rating) as sum_ratings")
        render :show
    end

end