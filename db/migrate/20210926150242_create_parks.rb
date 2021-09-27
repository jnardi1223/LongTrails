class CreateParks < ActiveRecord::Migration[5.2]
  def change
    create_table :parks do |t|
      t.string :park_name, null: false 
      t.string :state, null: false
      t.string :town, null: false
      t.text :description, null: false 
      t.string :park_type, null: false 
      t.integer :higest_elevation, null: false

      t.timestamps
    end
    add_index :parks, :park_name
  end
end
