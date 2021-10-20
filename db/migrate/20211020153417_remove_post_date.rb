class RemovePostDate < ActiveRecord::Migration[5.2]
  def change
    drop_column :reviews, :post_date
  end
end
