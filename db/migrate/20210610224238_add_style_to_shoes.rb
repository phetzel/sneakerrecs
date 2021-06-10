class AddStyleToShoes < ActiveRecord::Migration[5.2]
  def change
    add_column :shoes, :style, :string
  end
end
