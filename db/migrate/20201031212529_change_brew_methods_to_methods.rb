class ChangeBrewMethodsToMethods < ActiveRecord::Migration[5.2]
  def change
    rename_table :brew_methods, :methods
  end
end
