# == Schema Information
#
# Table name: trails
#
#  id             :bigint           not null, primary key
#  trail_name     :string           not null
#  summary        :text             not null
#  difficulty     :string           not null
#  length         :string           not null
#  elevation_gain :integer          not null
#  route_type     :string           not null
#  park_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#
class Trail < ApplicationRecord
    validates :trail_name, :difficulty, :summary, :route_type, :length, :long, :lat, presence: true
    validates :difficulty, inclusion: { in: ["easy", "moderate", "difficult", "hard"]}
    validates :route_type, inclusion: { in: ["Out & back", "loop", "Point to point"]}
    

    has_many :reviews

    has_many :reviewers,
        through: :reviews, 
        source: :reviewer


    belongs_to :park


end
