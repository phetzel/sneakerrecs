class CreateUserShoes < ActiveRecord::Migration[5.2]
  def change
    create_table :user_shoes do |t|
      t.integer :user_id, null: false
      t.integer :shoe_id, null: false
      t.timestamps
    end
  end
end
