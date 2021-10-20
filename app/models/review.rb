# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  post_date  :string           not null
#  hike_date  :string           not null
#  rating     :integer          not null
#  review     :text             not null
#  user_id    :integer          not null
#  trail_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :rating, :review, :hike_date, presence: true

    belongs_to :reviewer,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :trail,
        foreign_key: :trail_id,
        class_name: :Trail
end
