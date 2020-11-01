class RenameTypeToMethod < ActiveRecord::Migration[5.2]
  def change
    rename_column :brews, :type, :method
  end
end
