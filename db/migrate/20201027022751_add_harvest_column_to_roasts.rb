class AddHarvestColumnToRoasts < ActiveRecord::Migration[5.2]
  def change
    add_column :roasts, :harvest_date, :string
  end
end
