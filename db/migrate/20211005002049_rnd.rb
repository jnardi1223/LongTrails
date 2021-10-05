class Rnd < ActiveRecord::Migration[5.2]
  def change
    drop_table :trails
  end
end
