# == Schema Information
#
# Table name: parks
#
#  id               :bigint           not null, primary key
#  park_name        :string           not null
#  state            :string           not null
#  town             :string           not null
#  description      :text             not null
#  park_type        :string           not null
#  higest_elevation :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
require 'test_helper'

class ParkTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
