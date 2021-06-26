class CreateShoeColors < ActiveRecord::Migration[5.2]
  def change
    create_table :shoe_colors do |t|
      t.integer :shoe_id, null: false
      t.integer :color_id, null: false
      t.timestamps
    end
  end
end
