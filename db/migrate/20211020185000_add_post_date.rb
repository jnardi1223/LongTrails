class AddPostDate < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :post_date, :string
  end
end
