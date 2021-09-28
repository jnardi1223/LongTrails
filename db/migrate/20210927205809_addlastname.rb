class Addlastname < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :last_name, :string 
    rename_column :users, :username, :firstname
  end
end
