class CreateShoes < ActiveRecord::Migration[5.2]
  def change
    create_table :shoes do |t|
      t.string :brand, null: false
      t.string :name, null: false
      t.string :type, null: false
      
      t.timestamps
    end
  end
end
