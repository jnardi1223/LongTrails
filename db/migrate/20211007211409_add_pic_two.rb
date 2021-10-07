class AddPicTwo < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :img_url_2, :string 
    add_column :parks, :img_url_2, :string 
  end
end
