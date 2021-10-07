class AddPhotoUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :trails, :img_url, :string 
    add_column :parks, :img_url, :string 
  end
end
