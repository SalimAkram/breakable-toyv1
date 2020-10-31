class ChangeMethodsToBrews < ActiveRecord::Migration[5.2]
  def change
    rename_table :methods, :brews
  end
end
