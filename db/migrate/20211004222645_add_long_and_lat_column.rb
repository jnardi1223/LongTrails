class AddLongAndLatColumn < ActiveRecord::Migration[5.2]
  def change
    add_column :parks, :long, :float
    add_column :parks, :lat, :float
    add_column :trails, :long, :float
    add_column :trails, :lat, :float
  end
end
