class Api::TrailsController < ApplicationController
    def show
        @trail = Trail.find_by(id: params[:id])
        render :show
    end 

    def index
        @trails = Trail.where(park_id: params[:park_id])
    end 
end 