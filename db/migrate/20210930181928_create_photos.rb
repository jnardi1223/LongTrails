class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.datetime :photo_date
      t.datetime :hike_date
      t.text :caption
      t.integer :user_id
      t.integer :trail_id

      t.timestamps
    end
  end
end
