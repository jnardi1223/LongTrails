class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :firstname, :first_name
  end
end
