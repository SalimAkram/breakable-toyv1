class Brews < ActiveRecord::Migration[5.2]
  def change
     create_table :brews do |t|
      t.string :maker, null: false
      t.string :filter_type, null: false
      t.integer :brew_time, null: false
      t.string :kettle_type, null: false
      t.integer :water_temperature, null: false
      t.integer :grams, null: false
      t.string :grind, null: false
      t.text :instructions, null: false
      t.string :ratio
      t.integer :yield
      t.string :roast
      t.string :roast_region

      t.belongs_to :user, null: false
        
      t.timestamps null: false
    end
  end
end
