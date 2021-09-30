class ChangeRowName < ActiveRecord::Migration[5.2]
  def change
    rename_column :trails, :difficutly, :difficulty
  end
end
