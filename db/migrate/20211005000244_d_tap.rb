class DTap < ActiveRecord::Migration[5.2]
  def change
    drop_table :trails
    drop_table :parks
  end
end
