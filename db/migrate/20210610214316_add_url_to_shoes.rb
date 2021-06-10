class AddUrlToShoes < ActiveRecord::Migration[5.2]
  def change
    add_column :shoes, :url, :string
  end
end
