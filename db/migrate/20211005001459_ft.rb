class Ft < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.string :trail_name, null: false 
      t.text :summary, null: false 
      t.string :difficutly, null: false
      t.string :length, null: false 
      t.integer :elevation_gain, null: false 
      t.string :route_type, null: false 
      t.integer :park_id, null: false
      t.float :long, null: false
      t.float :lat, null: false

      t.timestamps
    end 
    add_index :trails, :park_id
  end
  
 
end
