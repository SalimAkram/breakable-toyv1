class AddPlaceIdColumn < ActiveRecord::Migration[5.2]
 def change
     add_column :shops, :place_id, :string
  end
end
