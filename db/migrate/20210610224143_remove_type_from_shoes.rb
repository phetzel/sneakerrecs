class RemoveTypeFromShoes < ActiveRecord::Migration[5.2]
  def change
    remove_column :shoes, :type, :string
  end
end
